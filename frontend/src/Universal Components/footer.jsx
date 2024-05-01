import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-column1">
            <div className="footer-logo-container">
              <img className="footer-logo-img" src="/logo-clear.png" alt="" />
              <div className="footer-logo-text">
                Digital Online Organization for Investment Training
              </div>
            </div>

            <div className="footer-copyright-container">
              <img
                className="footer-copyright-img"
                src="/copyright-logo.png"
                alt=""
              />
              <div className="footer-logo-text2">
                2024 - DOOIT INDONESIA ALL RIGHTS RESERVED • Made by DOOITEAM
              </div>
            </div>
          </div>
          <div className="footer-column2">
            <div className="column2-row1">
              <div className="office-title-text">OFFICE</div>
              <div className="office-text">
                Apartement Pacific Garden, TC 15-10
              </div>
            </div>
            <div className="column2-row2">
              <div className="office-title-text">EMAIL</div>
              <div className="office-text">dooiteam@gmail.com</div>
            </div>
          </div>
          <div className="footer-column3">
            <div className="column2-row1">
              <div className="office-title-text">FOLLOW US</div>
              <div className="logo-bar">
                <Link to="/" className="footer-logo-link">
                  <img src="/instagram.png" alt="" />
                </Link>
                <Link to="/" className="footer-logo-link">
                  <img src="/facebook.png" alt="" />
                </Link>
                <Link to="/" className="footer-logo-link">
                  <img src="/twitter.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
