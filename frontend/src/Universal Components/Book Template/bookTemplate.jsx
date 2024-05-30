import React from "react";
import "./bookTemplate.css";
import { Link } from "react-router-dom";

function BookTemplate(props) {
  return (
    <>
      <Link
        className="book-template-container" to={`/bookViewPage/${props.title}`}
      >
        <img src={props.img} alt="" className="bookTemp1" />
        <img src="rating-star.png" alt="" id={props.id} />
        <div className="bookTempTitle1">{props.title}</div>
      </Link>
    </>
  );
}

export default BookTemplate;

