import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="flex justify-between p-1.5 shadow-lg">
      <Link to="/">
        <img
          className="w-[54px] h-[54px] hover:cursor-pointer"
          src="https://media-assets.swiggy.com/portal/m/logo_192x192.png"
        ></img>
      </Link>
      <div className="w-[30%] flex justify-evenly items-center">
        <div className="hover:cursor-pointer hover:text-orange-500">
          <Link to="/Contact" className="link">
            Contact
          </Link>
        </div>
        <div className="hover:cursor-pointer hover:text-orange-500">
          <Link to="/about" className="link">
            About
          </Link>
        </div>
        <div className="hover:cursor-pointer hover:text-orange-500">
          <Link to="/cart" className="link">
            Cart
          </Link>
        </div>
        <div
          className="hover:cursor-pointer hover:text-orange-500"
          typeof="button"
          onClick={() => {
            setLoggedIn((prev) => !prev);
          }}
        >
          {loggedIn ? "Sign out" : "Sign In"}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
