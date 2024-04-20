import axios from "axios";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

const DeleteCookie = (cookies) => {
  const throwAway = async (id) => {
    const makeSure = await Swal.fire({
      //making sure the user wants to throwaway the cookie from the Menu, Used toast for styling and alert
      title: "Are you sure you want to throw away?",
      text: "Once its in the Trash, its gone!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Throw Away 🚮",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }); // some toast styling
    if (makeSure.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/cookies/${id}`);
        <toast className="warn"> Going...going...GONE!</toast>;
        getCookies(); //after removing the cookie, we call getCookies to render the fresh data
      } catch (error) {
        toast.error(console.error(error.message));
      }
    }
  };
  //console.log("this is cookies", cookies);

  return (
    <div>
      <button
        onClick={() => throwAway(cookies.id)}
        className="inline-block w-full text-center text-white bg-red-500 text-md hover:"
      >
        🗑️ Throw Away(delete) 🚮
      </button>
    </div>
  );
};

export default DeleteCookie;
