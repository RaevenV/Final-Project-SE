import React from "react";
import "./FavMentors.css"
import mentor1 from "../../../image-assets/mentors/mentor1.png"

function FavMentors() {
  return (
    <div className="fav-mentors-container">
      <div className="mentor-profile-container">
        <img src={mentor1}/>
        <div className="mentor-name-container">Giselle Sharon</div>
      </div>
    </div>

  );
}

export default FavMentors;
