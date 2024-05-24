import React from "react";
import "./forumCard.css";
import { Link, Navigate } from "react-router-dom";

function ForumCard(props) {

  const navigate = useNavigate();

  const handleClick = (title) =>{
    navigate(`/forumPreview/${title}`);
  }

  return (
    <div className="forumCard-container">
      <img src={props.img} alt="" className="forumCover" />
      <div className="whiteBox">
        <div className="bookTempTitle">{props.title}</div>
        <div className="people-button-container">
          <img src="./peopleIcon.png" alt="" className="peopleIcon" />
          <h1 className="peopleTotal">{props.people}</h1>
          <h1 className="peopleText">People</h1>
          <Link className="button-box-green" onClick={handleClick(props.title)}>join</Link>
        </div>
      </div>
    </div>
  );
}

export default ForumCard;
