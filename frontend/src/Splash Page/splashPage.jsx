import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./splashPage.css"
import "../Home Page/homePage.css"
import Footer from '../Universal Components/footer'
import SplashNavbar from '../Universal Components/navbars/splashNavbar'
import ChooseUs from './components/chooseUs';
import Reviews from './components/reviews';

function SplashPage() {
  return (
    <>
      <SplashNavbar />
      <div className="splashpage-container">
        <div className="hero-container">
          <div className="hero-text-container">
            <div className="hero-title">Empower Your Financial Future</div>
            <div className="hero-content">
              Unlock the Secrets of Entrepreneurship, Achieve Personal Growth,
              and Gain Financial Mastery for a Prosperous Future. Discover
              Strategies, Insights, and Tools to Build Wealth, Enhance Your
              Skills, and Live a Life of Financial Freedom.
            </div>
            <button type="button" class="btn btn-outline-light">
              Explore
            </button>
          </div>
        </div>

        <ChooseUs />

        <div id="about-container">
          <div id="img-container">
            <img src="./binus.jpg" className="about-img2" alt="" />
            <img src="./about-us.jpg" alt="" className="about-img1" />
          </div>

          <div id="about-wrapper">
            <div className="top-section">About Us</div>
            <div className="bottom-section">
              We are a group of five passionate classmates from BINUS University
              who came together to create an innovative financial teaching app.
              Our journey began with a shared vision to make financial education
              accessible and engaging for everyone. Combining our diverse skills
              and knowledge, we developed a comprehensive platform that offers
              expert-designed modules, affordable subscription plans, and a vast
              library of resources. Our mission is to empower individuals with
              the financial knowledge they need to achieve their goals and
              secure their future. Join us on this journey to financial literacy
              and success!
            </div>
          </div>
        </div>

        <div id="review-text">
          <div id="review-title">USER THOUGHTS</div>
          <div id="review-desc">Testimonials from current and past users about their own experience using our product!</div>
        </div>
        <Reviews/>
        <Footer />
      </div>
    </>
  );
}

export default SplashPage
