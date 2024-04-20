import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import AddCookie from "./pages/AddCookie";
import EditCookie from "./pages/EditCookie";
import CookieHistory from "./pages/CookieHistory";
import { ToastContainer } from "react-toastify"; //looks better with some fancy features
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <nav className="flex-wrap justify-center p-6 bg-teal-500">
        <div className="container px-3 mx-1 ">
          <Link to="/">
            <h1 className="text-3xl font-extrabold text-black underline">
              🏡 Home
            </h1>
          </Link>
          <Link to="/cookiehistory">
            <h1 className="text-3xl font-extrabold text-black underline">
              Cookie HIS-101 📚
            </h1>
          </Link>
          <Link to="/addcookie">
            <h1 className="text-3xl font-extrabold text-black underline">
              Add Cookie ➕ 🍪
            </h1>
          </Link>
        </div>
      </nav>
      {/* using BrowserRouter */}
      <div>
        <Routes>
          <Route index element={<Menu />}></Route>
          <Route path="/addcookie" element={<AddCookie />}></Route>
          <Route path="/editcookie/:id" element={<EditCookie />}></Route>
          <Route path="/cookiehistory" element={<CookieHistory />}></Route>
        </Routes>
      </div>
      <ToastContainer stacked />
    </div>
  );
};

export default App;
