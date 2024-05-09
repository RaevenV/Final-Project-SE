import React from "react";
import "./loginRegisterBtn.css";
import { Link } from "react-router-dom"

function LoginRegisterBtn({props}) {
  return (
    <div className="login-button-wrapper">
      {/* <Link to="/" className="login-button-click"> */}
        <button type="submit" className="login-button-click">{props}</button>
      {/* </Link> */}
    </div>
  );
}

export default LoginRegisterBtn;
