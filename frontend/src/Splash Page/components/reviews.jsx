import React from "react";
import "./reviews.css";
import ReviewCard from "./reviewCard";

function Reviews() {
  return (
    <>
      <div id="review-container">
        <div id="review-wrapper">
          <ReviewCard
            img="./person1.jpg"
            name="Para Max"
            job="Marketing Manager"
            review="This app is a game-changer! The modules are easy to
            understand and have improved my financial knowledge.
            Highly recommend it!"
          />
          <ReviewCard
            img="./person2.jpg"
            name="Vas Eline"
            job="Software Engineer"
            review="Absolutely love this app! The affordable plans and comprehensive resources have made learning accessible and enjoyable!"
          />
          <ReviewCard
            img="./person3.jpg"
            name="Sam Tsung"
            job="Teacher"
            review="The app's well-structured modules have made understanding concepts so much easier. It's been a fantastic learning experience!"
          />
          <ReviewCard
            img="./person4.jpg"
            name="Pep Soden"
            job="Freelance Writer"
            review="This app offers everything I need to improve my financial knowledge. The expert insights and vast library are incredibly helpful."
          />
        </div>
      </div>
    </>
  );
}

export default Reviews;
