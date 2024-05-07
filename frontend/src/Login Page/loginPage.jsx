import "./loginPage.css"
import React from "react"
import { Link } from "react-router-dom"

function LoginPage(){
    return (
        <>
            <div className="login-page-container">
                <div className="login-page-greetings">
                    <div className="login-page-greetings-wrapper">
                        <h1 className="welcome-greetings">Welcome</h1>
                        <h1 className="back-greetings">Back!</h1>
                    </div>
                </div>
                <div className="login-section-container">
                    <div className="login-section-wrapper">
                        <h1 className="login-title">Login</h1>
                        <div className="input-box">
                            <label className="email-label">Email</label>
                            <input type="text" placeholder="Input your email here" required/>
                        </div>
                        <div className="input-box">
                            <label className="password-label">Password</label>
                            <input type="text" placeholder="Input your password here" required/>
                        </div>
                        <div className="register-link">
                            <label className="register-link-description">Don't have any account?</label><Link to="../RegisterPage" className="signup-link"> Sign Up</Link>
                        </div>
                        <div className="login-button-wrapper"><button className="login-button-click">Login</button></div>
                        <div className="alternative-authentication">or continue with</div>
                        <div className="google-button-wrapper">
                            <button type="button" className="login-with-google-btn">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage