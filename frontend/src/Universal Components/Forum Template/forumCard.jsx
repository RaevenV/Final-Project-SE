import React from "react";
import "./forumCard.css";

function ForumCard(props) {
  return (
    <div className="forumCard-container">
      <img src={props.img} alt="" className="forumCover" />
      <div className="whiteBox">
        <div className="bookTempTitle">{props.title}</div>
        <div className="people-button-container">
          <img src="./peopleIcon.png" alt="" className="peopleIcon" />
          <h1 className="peopleTotal">{props.people}</h1>
          <h1 className="peopleText">People</h1>
          <div className="button-box-green">
            <h1 className="btn-text">Join</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumCard;
