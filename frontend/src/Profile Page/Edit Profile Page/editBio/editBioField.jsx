import React from "react";
import "./editBioField.css";

function EditBioField({label, placeholder}) {
  return (
    <div className="edit-bio">
      <div className="edit-bio-field-label">{label}</div>
      <input type="text" className="edit-bio-field" placeholder={placeholder}></input>
    </div>

  );
}

export default EditBioField;
