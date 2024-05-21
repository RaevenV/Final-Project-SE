import React from 'react'
import "./chooseUs.css"

function ChooseUs() {
  return (
    <>
      <div className="choose-container">
        <div className="choose-wrapper">
          <div id="choose-item1">
            <div className="text-icon-container">
              <img src="./expert-led.png" alt="" className="choose-icon" />
              <div id="choose-text1">Expert-led</div>
            </div>
            <div className="choose-desc1">
              Gain practical financial knowledge with expert-designed,
              easy-to-understand modules.
            </div>
          </div>
          <div id="choose-item2">
            <div className="text-icon-container">
              <img src="./cost-effective.png" alt="" className="choose-icon" />
              <div id="choose-text2">Cost-effective</div>
            </div>
            <div className="choose-desc2">
              Enjoy affordable education plans that fit various budgets, making
              financial learning accessible.
            </div>
          </div>
          <div id="choose-item3">
            <div className="text-icon-container">
              <img src="./community.png" alt="" className="choose-icon" />
              <div id="choose-text3">Community Support</div>
            </div>
            <div className="choose-desc3">
              Benefit from extensive resources and a supportive community to
              help you stay informed and motivated.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
