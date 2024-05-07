import React from "react";
import "./formField.css";

function FormField({label, placeholder}) {
  return (
    <div className="input-box">
        <label className="field-label">{label}</label>
        <input type="text" placeholder={placeholder} required/>
    </div>
  );
}

export default FormField;
