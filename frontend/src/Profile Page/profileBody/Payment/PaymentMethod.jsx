import React from "react";
import "./PaymentMethod.css"
import visaLogo from "../../../image-assets/visaLogo.png"

function PaymentMethod() {
  return (
    <div className="payment-container">
      <img src={visaLogo} />
      <div className="email">
        <div className="label">Card Number</div>
        <div className="field">**** **** **** ****</div>
      </div>
    </div>

  );
}

export default PaymentMethod;
