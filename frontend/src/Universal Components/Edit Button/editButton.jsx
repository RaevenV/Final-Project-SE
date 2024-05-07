import React from "react";
import "./editButton.css";
import { Link } from "react-router-dom";


function EditButton({buttonName, link}) {
  return (
    <div className="edit-button">
      <Link to={link} className="button-link">{buttonName}</Link>
    </div>
  );
}

export default EditButton;
