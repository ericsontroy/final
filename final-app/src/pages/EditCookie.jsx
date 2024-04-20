import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stars from "../components/Stars";
import { toast } from "react-toastify";
import axios from "axios";

const EditCookie = () => {
  let { id } = useParams();
  const goHome = useNavigate();
  const [baking, setBaking] = useState(false);
  const [cookie, setCookie] = useState({
    image: "",
    type: "",
    cookTime: "",
    ingredients: "",
    stars: "",
  });

  const shopCookies = async () => {
    setBaking(true);
    try {
      const resp = await axios.get(`http://localhost:3000/cookies/${id}`); //need url for single cookie id
      setCookie({
        image: resp.data.image,
        type: resp.data.type,
        cookTime: resp.data.cookTime,
        ingredients: resp.data.ingredients,
        stars: resp.data.stars,
      });

      setBaking(false); //no more loading in after this
    } catch (error) {
      console.log("broken in shopCookies");
    }
  };

  const updateCookie = async (e) => {
    e.preventDefault();
    setBaking(true);
    try {
      const resp = await axios.put(
        `http://localhost:3000/cookies/${id}`,
        cookie
      );
      toast.success(`${cookie.type} is UPDATED!`); //using fun toast styler
      goHome("/");
    } catch (error) {
      setBaking(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    shopCookies();
  }, []); //what happens when renders

  return (
    <div>
      <h1 className="font-extrabold text-center underline bg-yellow-200 text-7xl text">
        🚧 COOKIE UNDER CONSTRUCTION 🚧
      </h1>

      <div className="max-w-lg p-5 mx-auto mt-4 rounded-md bg-slate-200">
        <h1 className="font-bold text-center bg-yellow-100">
          🪚 Update {cookie.type} cookie! 🔧
        </h1>
        <form onSubmit={updateCookie}>
          <div className="space-y-3">
            <div>
              <label>Image:</label>
              <input
                type="text"
                className="w-full border-l-2 "
                placeholder="Image"
                value={cookie.image}
                onChange={(e) =>
                  setCookie({ ...cookie, image: e.target.value })
                }
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
                value={cookie.type}
                onChange={(e) => setCookie({ ...cookie, type: e.target.value })}
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
                value={cookie.cookTime}
                onChange={(e) =>
                  setCookie({ ...cookie, cookTime: e.target.value })
                }
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
                value={cookie.ingredients}
                onChange={(e) =>
                  setCookie({ ...cookie, ingredients: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <Stars
              value={cookie.stars}
              onChange={(e) => setCookie({ ...cookie, stars: e.target.value })}
            />
          </div>
          <div>
            {/* when "baking" aka rendering, we dont want to show the button to have multple submits, show we are hiding the button when "baking" */}
            {!baking && (
              <button className="block w-full mt-4 font-extrabold text-black bg-green-500 hover:bg-yellow-200">
                Update to be Baked!
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCookie;
//need to add ways to update the cookie simple ways
