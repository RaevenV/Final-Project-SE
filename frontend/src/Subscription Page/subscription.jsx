import React from "react";
import HomeNavbar from "../Universal Components/navbars/homeNavbar";
import Footer from "../Universal Components/footer";
import "./subscription.css";

function Subscription() {
  return (
    <>
      <HomeNavbar />
      <div className="subscription-container">
        <div className="subscription-wrapper">
          <div className="subscription-box">
            <div className="subscription-box-wrapper">
              <div className="subscription-title">
                1<div className="subscription-description">months</div>
              </div>
              <div className="subscription-price">Rp150.000</div>
            </div>
          </div>
          <div className="subscription-box">
            <div className="subscription-box-wrapper">
              <div className="subscription-title">
                6<div className="subscription-description">months</div>
              </div>

              <div className="subscription-price">Rp800.000</div>
            </div>
          </div>
          <div className="subscription-box">
            <div className="subscription-box-wrapper">
              <div className="subscription-title">
                12<div className="subscription-description">months</div>
              </div>
              <div className="subscription-price">Rp1.500.000</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscription;
