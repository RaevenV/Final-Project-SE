import React from "react";
import "./editProfilePage.css";
import HomeNavbar from "../../Universal Components/navbars/homeNavbar";
import Footer from "../../Universal Components/footer";
import EditPP from "./editPP/editPP";
import EditBio from "./editBio/editBio";
import PaymentInfo from "./paymentInfo/paymentInfo";
import RegisterButton from "../../Universal Components/Login & Register Buttons/registerButton";

function EditProfilePage() {
  return (
    <>
      <HomeNavbar />
      <div className="profilePage-container">
        <div className="editing-box">
          <EditPP/>
          <EditBio />
          <PaymentInfo />
          <div className="save-button-container">
            <RegisterButton text="Save Changes" link="/profile"/>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default EditProfilePage;
