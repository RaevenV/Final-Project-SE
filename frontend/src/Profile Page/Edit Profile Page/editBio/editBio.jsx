import React from "react";
import EditBioField from "../editBio/editBioField"

function EditBio() {
  return (
    <div className="edit-bio-container">
      <div className="bio-column">
        <EditBioField 
          label="Name"
          placeholder="Type here..."
        />
        <EditBioField 
          label="Email"
          placeholder="Type here..."
        />
        <EditBioField 
          label="Phone number"
          placeholder="Type here..."
        />
      </div>
      <div className="bio-column">
        <EditBioField 
          label="Occupation"
          placeholder="Type here..."
        />
        <EditBioField 
          label="Place of Birth"
          placeholder="Type here..."
        />
        <EditBioField 
          label="Date of Birth"
          placeholder="DD/MM/YYYY"
        />
      </div>
    </div>
  );
}

export default EditBio;
