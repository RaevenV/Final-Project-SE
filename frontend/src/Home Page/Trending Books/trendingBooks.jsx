import React from "react";
import "./trendingBooks.css";
import trendingCover1 from '../../imageTrendingBooks/trendingCover1.png';
import trendingCover2 from '../../imageTrendingBooks/trendingCover2.png';
import trendingCover3 from '../../imageTrendingBooks/trendingCover3.png';

function TrendingBooks() {
    return (
        <div classname="trending-wrapper">
            <h1 className="trendingBooks-text">Trending Books</h1>
        <div className="trending-cover-wrapper">
            <div className="cover-container">
            <div className="trendingCover1">
            <img src={trendingCover1} alt=""/>
            <h1 className="bookTitle1">Financial Basics for Business</h1>
            </div>
            <div className="trendingCover2">
            <img src={trendingCover2} alt="" />
            <h1 className="bookTitle2">Strangers at Work</h1>
            </div>
            <div className="trendingCover3">
            <img src={trendingCover3} alt="" />
            <h1 className="bookTitle3">Easy Manage Stocks</h1>
            </div>
            </div>
            
        </div>
        
        </div>
    );
}
        
export default TrendingBooks;
