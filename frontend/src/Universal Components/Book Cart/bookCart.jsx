import React from 'react';
import "./bookCart.css";


function BookCart(props) {
  return (
    <>
      <div className={props.className}>
        <img src={props.img} alt="" />
        <h1 className="bookTitle1">{props.title}</h1>
      </div>
    </>
  );
}

export default BookCart