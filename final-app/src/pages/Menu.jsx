import { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "../components/Cookie";

const Menu = () => {
  const [cookies, setCookies] = useState([]);
  const [baking, setBaking] = useState(false); //loading variable

  const getCookies = async () => {
    try {
      setBaking(true);
      const resp = await axios.get("http://localhost:3000/cookies"); //trying axios vs fetch
      console.log(resp.data);
      setCookies(resp.data);
      setBaking(false);
    } catch (error) {
      console.log(error);
    }
  };
  //useEffect to render the page when it first loads calling the getCookies()
  useEffect(() => {
    getCookies();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-extrabold text-center underline bg-blue-200 text">
        ⭐️ THE COOKIE MENU ⭐️
      </h1>
      <div className="grid grid-cols-3 gap-3.5 mt-px px-px">
        {baking ? (
          "Cookies Baking.....⏲️🍪"
        ) : (
          //if the app is loading  show that the cookies are baking
          <>
            {cookies.length > 0 ? (
              //if greater than 0 print all cookies out. IF less then show the cookies are gone.
              <>
                {/* loop to show all cookies */}
                {cookies.map((cookies, index) => {
                  return (
                    <div key={index + "div"}>
                      <Cookie
                        key={index}
                        cookies={cookies}
                        getCookies={getCookies}
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <div>Cookies are all GONE!😵‍💫</div>
              // showing all the cookie data is gone. Need to add more
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Menu;
