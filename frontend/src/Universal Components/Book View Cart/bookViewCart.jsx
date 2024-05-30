import React from "react";
import "./bookViewCart.css";

function BookViewCart(props) {
  return (
    <>
      <div className="bookView-wrapper">
        <div className="bookView-container">
          <img
            src={props.img}
            alt=""
            className="bookViewCover1"
          />
          <div className="bookDetails-container">
            <h1 className="bookViewTitle">{props.title}</h1>
            <div className="detailSection-container">
              <div className="author-wrapper">
                <div>by</div>
                <h1 className="bookViewAuthor">{props.author}</h1>
              </div>
              <div className="bookDetails-miniContainer">
                <div className="rating-star-container">
                  <h1 className="bookStars">{props.stars}</h1>
                  <img src="/rating-star.png" alt="" id="rating-star" />
                </div>
                <div className="ratingContainer">
                  <h1 className="bookRating">{props.rating}</h1>
                  <h1 className="ratingText">rating</h1>
                </div>
                <div className="pagesContainer">
                  <h1 className="bookPages">{props.pages}</h1>
                  <h1 className="pagesText">pages</h1>
                </div>
              </div>
            </div>
            <hr className="dividerLineTop" />
            <p className="bookDesc">{props.desc}</p>
            <hr className="dividerLineBottom" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookViewCart;
