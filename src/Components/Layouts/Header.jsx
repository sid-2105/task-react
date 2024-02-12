import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import ScrollToAbout from "../ScrolltoParticular/ScrollToAbout";

const Header =() =>{
  
return (
  <div className="Header">
    <div className="header-logo">
      <Link to={"/"}>
        <img src="./taskbuddy-logo.png" alt="Logo" />
      </Link>
    </div>

    <div className="navigation">
      <Link to={"/"}>
        <li>Home</li>
      </Link>

      <Link to={"/about"} >
        <li onClick={ScrollToAbout}>About</li>
      </Link>

      {/* <li>
        <a href="#aboutpage">About</a>
      </li> */}

      <Link to={"/contact"}>
        <li>Contact</li>
      </Link>

      <Link to={"/help"}>
        <li>Help</li>
      </Link>
    </div>
  </div>
);

}

export default Header;
