import "./registerPage.css"
import React from "react"
import { Link } from "react-router-dom"

function RegisterPage(){
    return(
        <>
        <div className="register-page-container">
                <div className="register-section-container">
                    <div className="register-section-wrapper">
                        <h1 className="register-title">Register</h1>
                        <div className="input-box">
                            <label className="name-label">Name</label>
                            <input type="text" placeholder="Input name" required/>
                        </div>
                        <div className="input-box">
                            <label className="email-label">Email</label>
                            <input type="text" placeholder="Input email" required/>
                        </div>
                        <div className="input-box">
                            <label className="password-label">Password</label>
                            <input type="text" placeholder="Input password" required/>
                        </div>
                        <div className="register-link">
                            <label className="register-link-description">Already have an account?</label><Link to="../LoginPage" className="signup-link"> Login</Link>
                        </div>
                        <div className="register-button-wrapper"><button className="register-button-click">Login</button></div>
                        <div className="alternative-authentication">or continue with</div>
                        <div className="google-button-wrapper">
                            <button type="button" className="register-with-google-btn">Google</button>
                        </div>
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
    )
}

export default RegisterPage