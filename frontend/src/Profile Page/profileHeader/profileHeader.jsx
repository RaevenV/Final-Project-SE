import React from "react";
import "./profileHeader.css";
import userProfile from "../../image-assets/user/userProfile.png"
import EditButton from "../../Universal Components/Edit Button/editButton";

function ProfileHeader() {
  return (
    <div className="header-container">
      <img src={userProfile}/>
      <div className="desc-container">
        <div className="name-container">Andrew Jonathan</div>
        <div className="line"></div>
        <div className="bio-container">Mobile Game Analyst | 32 Years old</div>
        <div className="location-container">Tangerang Selatan, Banten</div>
        <EditButton buttonName="edit profile" link="/editProfile"/>
      </div>
    </div>

  );
}

export default ProfileHeader;
