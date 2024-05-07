import React from "react";
import "./emailField.css";

function Email() {
  return (
    <div className="email-section">
      <div className="email">
        <div className="label">Email</div>
        <div className="field">andrew.jonathan@gmail.com</div>
      </div>
      <div className="email">
        <div className="label">Password</div>
        <div className="field">********</div>
      </div>
    </div>

  );
}

export default Email;
