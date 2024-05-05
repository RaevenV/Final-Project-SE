import React from "react";
import Footer from "../Universal Components/footer";
import HomeNavbar from "../Universal Components/navbars/homeNavbar";
import './homePage.css'
import News from "./News/news";
import images from "./News/newsImage";
import TrendingModules from "./Trending Modules/trendingModules"
import TrendingBooks from "./Trending Books/trendingBooks";

function HomePage() {
  return (
    <>
      <HomeNavbar />
      <div className="homepage-container">
        <News>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </News>
        <TrendingModules />
        <TrendingBooks />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
