import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="nav-bar">
      <Link to="/">
        <img
          className="logo"
          src="https://media-assets.swiggy.com/portal/m/logo_192x192.png"
        ></img>
      </Link>
      <div className="nav-items">
        <div className="nav-item">
          <Link to="/Contact" className="link">
            Contact
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/about" className="link">
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/cart" className="link">
            Cart
          </Link>
        </div>
        <div
          className="nav-item"
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
