import "./loginPage.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import FormField from "../Form Field/formField"
import LoginRegisterBtn from "../Button/loginRegisterBtn"
import GoogleBtn from "../Button/googleBtn"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom";

function LoginPage(){
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            navigate("/home");
        })
        .catch((error) => {
            setError(true)
        });
    }
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
                        <form onSubmit={handleLogin}>
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
                                <label className="register-link-desc">Don't have any account?</label>
                                <Link to="../RegisterPage" className="sign-up-link"> Sign Up</Link>
                            </div>
                            <LoginRegisterBtn buttonLbl="Login" onClick={handleLogin}/>
                            <div className="alternative-authentication">or continue with</div>
                            <GoogleBtn/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage