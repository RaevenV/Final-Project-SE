import "./registerPage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormField from "../Form Field/formField";
import LoginRegisterBtn from "../Button/loginRegisterBtn";
import GoogleBtn from "../Button/googleBtn";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateName(name) && validateEmail(email) && validatePassword(password)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/home");
        })
        .catch((error) => {
          setError(true);
        });
    } else {
      setError(true); 
    }
  };

  const validateName = (name) => {
    if (name.length < 8) {
      alert("Name must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address ending with .com");
      return false;
    }
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="login-page-container">
        <div className="register-section-container">
          <div className="login-section-wrapper">
            <h1 className="login-title">Sign Up</h1>
            <form onSubmit={handleLogin}>
              <FormField
                label="Name"
                type="text"
                placeholder="Input name"
                style={error ? { border: "1px solid red" } : {}}
                onChange={(e) => setName(e.target.value)}
              />
              <FormField
                label="Email"
                type="email"
                placeholder="Input your email here"
                style={error ? { border: "1px solid red" } : {}}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormField
                label="Password"
                type="password"
                placeholder="********"
                style={error ? { border: "1px solid red" } : {}}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="register-link">
                <label className="register-link-desc">
                  Already have an account?
                </label>
                <Link to="../LoginPage" className="sign-up-link"> Login</Link>
              </div>
              <LoginRegisterBtn buttonLbl="Sign Up" onClick={handleLogin}/>
              <div className="alternative-authentication">or continue with</div>
              <GoogleBtn />
            </form>
          </div>
        </div>
        <div className="register-page-greetings">
          <div className="register-page-greetings-wrapper">
            <h1 className="first-time-greetings">First Time</h1>
            <h1 className="here-greetings">Here ?</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
