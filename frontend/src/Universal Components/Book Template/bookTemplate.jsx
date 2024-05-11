import React from 'react';
import "./bookTemplate.css";

function BookTemplate(props) {
    return (
      <>
      <div className="book-template-container">
            <img src={props.img} alt="" className="bookTemp1"  />
            <img src="rating-star.png" alt="" id="rating-star-template"/>
            <h1 className="bookTempTitle">{props.title}</h1>
      </div>
      </>
    );
  }
  
  export default BookTemplate