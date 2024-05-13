import React from "react";
import ContinueLastCourseCard from "../ContinueLastCourseCard/ContinueLastCourseCard";
import "./ContinueLastCourse.css";

function ContinueLastCourse() {
  return (
    <>
      <div className="continuelastcourse-container">
        <div className="continuelastcourse-title">
          <h1 className="continue-trendingmodules-title">
            Continue Your Last Course
          </h1>
        </div>
        <div className="continuelastcourse-cards-container">
          <div className="continuemodule1">
            <ContinueLastCourseCard
              className="continuemodule1"
              imgModule="./trendingModules1.jpg"
              title="Investing fundamentals"
              description="Dive into investing essentials: risk assessment, portfolio diversification, and fundamental analysis for achieving financial success."
              progress="80"
            />
          </div>
          <div className="continuemodule2">
            <ContinueLastCourseCard
              className="continuemodule2"
              imgModule="./trendingModules2.jpg"
              title="Lead Yourself"
              description="Master Self-Leadership for Success. Self-leadership is paramount. Explore proven strategies for self-motivation, goal-setting, and resilience."
              progress="50"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContinueLastCourse;
