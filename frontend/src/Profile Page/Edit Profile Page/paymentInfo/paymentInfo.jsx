import React from "react";
import "./paymentInfo.css";
import EditBioField from "../editBio/editBioField";

function PaymentInfo() {
  return (
    <div className="payment-info-container">
      <div className="payment-title-container">Payment Method</div>
      <div className="payment-field">
        <EditBioField 
          label="Card Holder Name"
          placeholder="Enter your name..."
        />
        <EditBioField 
          label="Card Number"
          placeholder="**** - **** - **** - ****"
        />
        <div className="edit-card-container">
          <EditBioField 
            label="Expiry Date"
            placeholder="MM/YY"
          />
          <EditBioField 
            label="CVV Number"
            placeholder="***"
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
