import React from "react";
import "./formField.css";

function FormField({label, type, placeholder, style, onChange}) {
  return (
    <div className="input-box">
        <label className="field-label">{label}</label>
        <input type={type} placeholder={placeholder} style={style} onChange={onChange}/>
    </div>
  );
}

export default FormField;
