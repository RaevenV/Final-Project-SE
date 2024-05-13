import React from "react";
import "./modulePreview.css";
import HomeNavbar from "../../Universal Components/navbars/homeNavbar";
import Footer from "../../Universal Components/footer";
import ModuleDesc from "./ModuleDesc/moduleDesc";

function ModulePreview() {
  return (
    <>
      <HomeNavbar />
      <div className="profilePage-container">
        <ModuleDesc link="./trendingModules1.jpg"/>
      </div>
      <Footer/>
    </>
  );
}

export default ModulePreview;
