import React from 'react';
import "./bookCart.css";


function BookCart(props) {
  return (
    <>
      <div className={props.className}>
        <img src={props.img} alt="" />
        <div className="bookTitle1">{props.title}</div>
      </div>
    </>
  );
}

export default BookCart