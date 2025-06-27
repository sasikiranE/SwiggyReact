import React from "react";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img
        className="logo"
        src="https://media-assets.swiggy.com/portal/m/logo_192x192.png"
      ></img>
      <div className="nav-items">
        <div className="nav-item">Offers</div>
        <div className="nav-item">Help</div>
        <div className="nav-item">Sign In</div>
        <div className="nav-item">Cart</div>
      </div>
    </div>
  );
};

export default NavBar;
