import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";
import RegisterButton from "../Login & Register Buttons/registerButton";


function HomeNavbar(props) {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <Link to="/" className="navlogo-link">
            <img className="navlogo-img" src="/logo-clear.png" alt="" />
          </Link>
          
          <div className="navbar-button">
            <Link to="/" className="navbar-link">
              Modules
            </Link>
          </div>
          <div className="navbar-button1">
            <Link to="/" className="navbar-link">
              Library
            </Link>
          </div>
          <div className="navbar-button">
            <Link to="/" className="navbar-link">
              Forum
            </Link>
          </div>
          <RegisterButton text="Login" link="/" />
        </div>
      </div>
    </>
  );
}

export default HomeNavbar;
