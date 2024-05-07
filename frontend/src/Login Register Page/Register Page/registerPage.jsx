import "./registerPage.css"
import React from "react"
import { Link } from "react-router-dom"
import FormField from "../Form Field/formField"
import LoginRegisterBtn from "../Button/loginRegisterBtn"
import GoogleBtn from "../Button/googleBtn"

function RegisterPage(){
    return(
        <>
            <div className="login-page-container">
                <div className="register-section-container">
                    <div className="login-section-wrapper">
                        <h1 className="login-title">Sign Up</h1>
                        <FormField label="Name" placeholder="Input name"/>
                        <FormField label="Email" placeholder="Input email"/>
                        <FormField label="Password" placeholder="********"/>
                        <div className="register-link">
                            <label className="register-link-desc">Already have an account?</label>
                            <Link to="../LoginPage" className="sign-up-link"> Login</Link>
                        </div>
                        <LoginRegisterBtn props="Sign Up"/>
                        <div className="alternative-authentication">or continue with</div>
                        <GoogleBtn/>
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