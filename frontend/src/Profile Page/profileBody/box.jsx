import React from "react";
import "./boxes.css";

function Box({title, body}) {
  return (
    <div className="box-container">
      <div className="box-title-container">
        <div className="title">{title}</div>
      </div>
      <div className="body">{body}</div>
    </div>

  );
}

export default Box;
