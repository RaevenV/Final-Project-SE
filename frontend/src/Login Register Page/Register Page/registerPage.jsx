import "./registerPage.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import FormField from "../Form Field/formField"
import LoginRegisterBtn from "../Button/loginRegisterBtn"
import GoogleBtn from "../Button/googleBtn"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from "../../firebase"

function RegisterPage(){
    const [error, setError] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = (e)=>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth, name, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            setError(true)
        });
    }

    return(
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
                                onChange={e=>setName(e.target.value)}
                            />
                            <FormField 
                                label="Email" 
                                type="email" 
                                placeholder="Input your email here" 
                                style={error ? { border: "1px solid red" } : {}}
                                onChange={e=>setEmail(e.target.value)}
                            />
                            <FormField 
                                label="Password" 
                                type="password" 
                                placeholder="********" 
                                style={error ? { border: "1px solid red" } : {}}
                                onChange={e=>setPassword(e.target.value)}
                            />
                            <div className="register-link">
                                <label className="register-link-desc">Already have an account?</label>
                                <Link to="../LoginPage" className="sign-up-link"> Login</Link>
                            </div>
                            <LoginRegisterBtn props="Sign Up"/>
                            <div className="alternative-authentication">or continue with</div>
                            <GoogleBtn/>
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
    )
}

export default RegisterPage