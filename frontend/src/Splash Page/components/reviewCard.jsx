import React from "react";
import "./reviewCard.css";

function ReviewCard(props) {
  return (
    <>
      <div id="card-container">
        <img id="card-img" src={props.img} alt="" />
        <div id="card-content-container">
          <div id="user-name">{props.name}</div>
          <div id="user-job">{props.job}</div>
          <div id="user-review">
            "{props.review}"
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
