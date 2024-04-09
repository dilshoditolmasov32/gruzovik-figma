import React from "react";
import "./Navbar.css";
import menu from "../assests/images/menu.svg";
const Navbar = () => {
  const LINKS = ["Home", "About", "Blog", "Contact", "Help"];
  return (
    <div className="nav">
      <div className="container">
        <div className="navbar">
          <div className="logo">грузовик</div>
          <ul>
            {LINKS?.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
          <div className="menu-btn">
            {" "}
            <img src={menu} alt="gamburger-menu" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
