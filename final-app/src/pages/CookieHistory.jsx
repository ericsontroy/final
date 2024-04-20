import history from "../assets/photos/history.webp";
import cookieG from "../assets/photos/cookieG.jpeg";

const CookieHistory = () => {
  return (
    <>
      <div className="text-3xl font-extrabold text-center underline bg-orange-300 text">
        <h1> 🍪 Cookie History-101 📚 </h1>
      </div>
      <div>
        <img src={history} alt="history" className="" />
      </div>
      <div className="max-w-lg p-5 mx-auto mt-4 rounded-md bg-slate-200">
        <h1 className="text-center text-7xl border-l-black">Cookie History!</h1>
        <p className="text-center bg-white ">
          The cookie's origin traces back to Persia in the 7th century, where
          they were first baked as small cakes. They spread through trade
          routes, evolving over time in Europe with new ingredients and
          techniques. The Dutch introduced them to America in the 17th century,
          and voilà, the beloved cookie was born!
        </p>
      </div>
      <div>
        <img src={cookieG} alt="cookieG" className="" />
      </div>
    </>
  );
};

export default CookieHistory;
