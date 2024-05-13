import React from "react";
import "./bookTemplate.css";

function BookTemplate(props) {
  return (
    <>
      <div className="book-template-container">
        <img src={props.img} alt="" className="bookTemp1" />
        <img src="rating-star.png" alt="" id="rating-star-template" />
        <div className="bookTempTitle">{props.title}</div>
      </div>
    </>
  );
}

export default BookTemplate;