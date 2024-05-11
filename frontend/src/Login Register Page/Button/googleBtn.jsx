import React, { useEffect, useState } from "react";
import "./googleBtn.css";
import { signInWithPopup } from "firebase/auth";
import { auth , provider } from "../../firebase";

function GoogleBtn() {
  const[value, setValue] = useState ('');
  const googleHandleLogin= () => {
      signInWithPopup(auth,provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email", data.user.email)
      })
  }

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })
  
  return (
    <div className="google-button-wrapper">
      <button onClick={googleHandleLogin} className="login-with-google-btn">Google</button>
    </div>
  );
}

export default GoogleBtn;
