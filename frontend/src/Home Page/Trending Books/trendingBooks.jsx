import React from "react";
import "./trendingBooks.css";
import trendingCover1 from '../../imageTrendingBooks/trendingCover1.png';
import trendingCover2 from '../../imageTrendingBooks/trendingCover2.png';
import BookCart from "../../Universal Components/Book Cart/bookCart";
import atomicCover from "/atomicHabits.jpg";

function TrendingBooks() {
    return (
      <div className="trending-wrapper">
        <h1 className="trendingBooks-text">Trending Books</h1>
        <div className="trending-cover-wrapper">
            <BookCart
              img={trendingCover1}
              title="Financial Basics for Business"
              className="trendingCover1"
            />
            <BookCart
              img={trendingCover2}
              title="Stranger at Work"
              className="trendingCover2"
            />
            <BookCart
              img={atomicCover}
              title="Atomic Habits"
              className="trendingCover3"
            />
        </div>
      </div>
    );
}
        
export default TrendingBooks;