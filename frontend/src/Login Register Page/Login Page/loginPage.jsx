import "./loginPage.css"
import React from "react"
import { Link } from "react-router-dom"
import FormField from "../Form Field/formField"
import LoginRegisterBtn from "../Button/loginRegisterBtn"
import GoogleBtn from "../Button/googleBtn"

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
                        <FormField label="Email" placeholder="Input your email here"/>
                        <FormField label="Password" placeholder="********"/>
                        <div className="register-link">
                            <label className="register-link-desc">Don't have any account?</label>
                            <Link to="../RegisterPage" className="sign-up-link"> Sign Up</Link>
                        </div>
                        <LoginRegisterBtn props="Login"/>
                        <div className="alternative-authentication">or continue with</div>
                        <GoogleBtn/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage