import React from "react";
import ModuleNavbar from "../Universal Components/navbars/moduleNavbar";
import FeaturedModulesCart from "./FeaturedModulesCart/FeaturedModulesCart";
import Footer from "../Universal Components/footer"
import ContinueLastCourse from "./ContinueLastCourse/ContinueLastCourse";
import HomeNavbar from "../Universal Components/navbars/homeNavbar";

function ModulesPage() {
  return (
    <>
      <HomeNavbar/>
      <div className="modulepage-container">
        <FeaturedModulesCart />
        <ContinueLastCourse />
      </div>
      <Footer />
    </>
  );
}

export default ModulesPage;
