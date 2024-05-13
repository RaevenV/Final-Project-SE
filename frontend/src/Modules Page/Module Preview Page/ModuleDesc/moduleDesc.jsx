import React from "react";
import "./moduleDesc.css";

function ModuleDesc({link}) {
  return (
    <>
      <div className="module-desc-container">
        <img src={link}/>
        <div className="description-text">
          <div className="desc-title">Investing Fundamentals</div>
          <div className="desc-body">Unlock the secrets to financial success with our comprehensive course, Investing Fundamentals 101. 
          Designed for beginners and intermediate investors alike, this course serves as a solid foundation for understanding the principles 
          and strategies that drive successful investment practices.</div>
        </div>
      </div>
    </>
  );
}

export default ModuleDesc;
