import React from "react";
import HomeNavbar from "../../Universal Components/navbars/homeNavbar";
import Footer from "../../Universal Components/footer";
import ModuleDesc from "./ModuleDesc/moduleDesc";
import SubModule from "./SubModule/subModule";

function ModulePreview() {
  return (
    <>
      <HomeNavbar />
      <div className="profilePage-container">
        <ModuleDesc link="./trendingModules1.jpg"/>
        <SubModule/>
      </div>
      <Footer/>
    </>
  );
}

export default ModulePreview;
