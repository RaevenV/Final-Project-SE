import React from "react";
import "./editPP.css";
import editProfileIcon from "../../../image-assets/editProfileIcon.png"
import EditButton from "../../../Universal Components/Edit Button/editButton";


function EditPP() {
  return (
    <div className="edit-pp-container">
      <img src={editProfileIcon}/>
      <div className="pp-container">
        Profile Picture
        <EditButton buttonName="change" link="/"/>
      </div>
    </div>
  );
}

export default EditPP;
