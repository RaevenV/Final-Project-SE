import React from "react";
import Footer from "../Universal Components/footer";
import HomeNavbar from "../Universal Components/navbars/homeNavbar";
import './profilePage.css'
import ProfileHeader from "./profileHeader/profileHeader";
import Box from "./profileBody/box";
import Email from "./profileBody/Email/emailField";
import FavMentors from "./profileBody/Fav Mentors/FavMentors";
import Plan from "./profileBody/Plan/Plan"
import PaymentMethod from "./profileBody/Payment/PaymentMethod";

function ProfilePage() {
  return (
    <>
      <HomeNavbar />
      <div className="profilePage-container">
        <ProfileHeader />
        <div className="body-container">
          <div className="profile-column">
            <Box 
              title="About You"
              body="I'm a seasoned mobile game analyst, delving into player behavior and game mechanics to maximize success. 
              I'm constantly immersed in the latest releases, seeking the next big hit and fine-tuning strategies for success."
            />
            <Box 
              title="Account"
              body=<Email/>
            />
            <Box 
              title="Favorite Mentors"
              body=<FavMentors/>
            />
          </div>
          <div className="profile-column">
          <Box 
              title="Your Plan"
              body=<Plan/>
            />
            <Box 
              title="Payment Method(s)"
              body=<PaymentMethod/>
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
