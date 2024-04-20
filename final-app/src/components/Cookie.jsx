import axios from "axios";
//import Stars from "./Stars";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Cookie = ({ cookies, getCookies }) => {
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
    <div className="overflow-hidden bg-white rounded shadow-xl">
      <img src={cookies.image} className="object-center w-full h-27" />
      <div className="px-3 pt-3 pb-2">
        <h3 className="font-bold text-center underline bg-red-100 text">
          {cookies.type}
        </h3>
        <div className="text-sm text-center bg-blue-100">
          ⏲️ Cook Time: {cookies.cookTime} minutes
        </div>
        {/* display the ingredients too */}
        <div className="text-center bg-yellow-100 border justify-evenly ">
          <li>{cookies.ingredients}</li>
        </div>
        <div className="bg-slate-100">
          {cookies.stars
            ? [1, 2, 3, 4, 5].map((value) =>
                value <= cookies.stars ? "★" : "☆"
              )
            : "No Star Value ❌"}
        </div>
        <>
          <div className="flex gap-2 mt-3">
            <Link
              to={`/editcookie/${cookies.id}`}
              className="inline-block w-full text-center bg-yellow-400 text-md hover: "
            >
              🦺 Edit 🚧
            </Link>
            <button
              onClick={() => throwAway(cookies.id)}
              className="inline-block w-full text-center text-white bg-red-500 text-md hover:"
            >
              🗑️ Throw Away(delete) 🚮
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cookie;

//add some buttons to interact with
