import React from "react";
import "./readerTopPicks.css";
import BookTemplate from "../../Universal Components/Book Template/bookTemplate";

function ReaderTopPicks() {
  return (
    <>
      <div className="top-picks-title-wrapper">
        <div className="top-picks-title">Reader Top Picks</div>
      </div>
      <div className="top-picks-wrapper">
        <div className="top-picks-books">
          <BookTemplate
            img="/trendingCover1.png"
            title="Financial Basics for Business"
            id="rating-star-template2"
          />
          <BookTemplate
            img="/atomicHabits.jpg"
            title="Atomic Habits"
            id="rating-star-template2"
          />
          <BookTemplate
            img="/intelligentInvestor.jpg"
            title="The Intelligent Investor"
            id="rating-star-template2"
          />
        </div>
      </div>
    </>
  );
}

export default ReaderTopPicks;
