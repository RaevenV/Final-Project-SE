import React from "react";
import Footer from "../Universal Components/footer";
import HomeNavbar from "../Universal Components/navbars/homeNavbar";
import './homePage.css'
import News from "./Components/News/news";

function HomePage() {
  return (
    <>
      <HomeNavbar />
      <div className="homepage-container">
        <News />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
