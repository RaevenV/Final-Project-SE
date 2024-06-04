import React from 'react';
import "./bookCart.css";
import { Link } from 'react-router-dom';


function BookCart(props) {
  return (
    <>
      <Link to={`/bookViewPage/${props.title}`} className={props.className}>
        <img src={props.img} alt="" id='bookCartImg' />
        <div className="bookTitle1">{props.title}</div>
      </Link>
    </>
  );
}

export default BookCart