import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
import { Link } from "react-router-dom";
import RegisterButton from "../Login & Register Buttons/registerButton";

function HomeNavbar(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid mb-2">
        <Link to="/home" href="#" className="navbar-btn-wrapper">
          <img src="/logo-clear.png" className="navlogo-img" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item left">
              <Link to="/modulesPage" className="nav-link">
                modules
              </Link>
            </li>
            <li className="nav-item middle">
              <Link to="/libraryPage" className="nav-link">
                library
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/forumPage" className="nav-link">
                forum
              </Link>
            </li>
          </ul>
          <Link to="/profile" className="navbar-btn-wrapper2">
            <img src="/profileLogo.png" className="profile-logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar;
