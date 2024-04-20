import { useState } from "react";
import Stars from "../components/Stars";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; //improve UI

const AddCookie = () => {
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngregients] = useState("");
  const [stars, setStars] = useState([0]);
  //setting the state for the 4 data variables type, cook time, and the  ingredients.
  const [baking, setBaking] = useState(false); //this is my loading variable but cookie style

  const goHome = useNavigate(); //to go back home after adding a cookie

  const saveCookie = async (e) => {
    e.preventDefault();
    if (
      image === "" ||
      type === "" ||
      cookTime === "" ||
      ingredients == "" ||
      stars == ""
    ) {
      alert("Missing some stuff for your COOKIE!"); //if any of the input boxes are left empty it will alert the user.
      toast.error("Cookie Not Happy... ");
      return;
    }
    try {
      setBaking(true);
      const resp = await axios.post("http://localhost:3000/cookies/", {
        image: image,
        type: type,
        cookTime: cookTime,
        ingredients: ingredients,
        stars: stars,
      });
      toast.success(`Saved ${resp.data.type} Recipe!!`); // fancy toast feat to show saving feature.
      setBaking(false);
      goHome("/"); //the directory to go back home after adding cookie.
      console.log("WHOOHOO!");
    } catch (error) {
      toast.error(error.message);
      console.log("Cookies on the floor..... Error");
      setBaking(false);
    }
  }; //need to set a id with for loop

  return (
    <>
      <h1 className="text-3xl font-extrabold text-center underline bg-green-200 text">
        🍪 ADD COOKIE TO BE BAKED! ⏲️
      </h1>
      <div className="max-w-lg p-5 mx-auto mt-4 rounded-md bg-slate-200">
        <h1 className="text-lg text-center underline bg-yellow-200">
          Add Your Favorite Cookie!
        </h1>
        <form onSubmit={saveCookie}>
          <div className="space-y-3">
            <div>
              <label>Image:</label>
              <input
                type="text"
                className="w-full border-l-2 "
                placeholder="Cookie Image"
                value={image}
                onChange={(e) => setImage(e.target.value)} //taking the event and setting the type of cookie with wha is typed in to text box.
              />
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label>Type:</label>
              <input
                type="text"
                className="w-full border-l-2 "
                placeholder="Cookie Type"
                value={type}
                onChange={(e) => setType(e.target.value)} //taking the event and setting the type of cookie with wha is typed in to text box.
              />
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label>Cook Time:</label>
              <input
                type="number"
                className="w-full border-l-2 "
                placeholder="Cook Time"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label>Ingredients:</label>
              <input
                type="text"
                className="w-full border-l-2 "
                placeholder="Ingredients"
                value={ingredients}
                onChange={(e) => setIngregients(e.target.value)}
              />
            </div>
          </div>
          <div>
            Set star review if you have tried them!
            <Stars value={stars} onChange={(e) => setStars(e.target.value)} />
          </div>
          <div>
            {/* when "baking" aka rendering, we dont want to show the button to have multple submits, show we are hiding the button when "baking" */}
            {!baking && (
              <button className="block w-full mt-4 font-extrabold text-black bg-green-500 hover:bg-yellow-200">
                Save to be Baked!
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCookie;

//TODO LIST:
//want to add a search area to look up recipies to record and try later

// possibly add a review: note taker place on each div to display note for next time
