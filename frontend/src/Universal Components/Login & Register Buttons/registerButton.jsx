import React from "react";
import "./registerButton.css";
import { Link } from "react-router-dom";

function RegisterButton(props) {
    return (
      <>
        <div className="login-button">
          <Link to={props.link} className="login-button-link">
            {props.text}
          </Link>
        </div>
      </>
    );
}


export default RegisterButton;
