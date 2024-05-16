import React from "react";
import "./loginRegisterBtn.css";
import { Link } from "react-router-dom"

function LoginRegisterBtn({buttonLbl, onClick}) {
  return (
    <div className="login-button-wrapper">
        <button type="submit" className="login-button-click" onClick={onClick}>
          {buttonLbl}
        </button>
    </div>
  );
}

export default LoginRegisterBtn;
