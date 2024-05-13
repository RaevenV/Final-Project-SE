import React from "react";
import ModuleNavbar from "../Universal Components/navbars/moduleNavbar";
import FeaturedModulesCart from "./FeaturedModulesCart/FeaturedModulesCart";
import Footer from "../Universal Components/footer"
import ContinueLastCourse from "./ContinueLastCourse/ContinueLastCourse";

function ModulesPage() {
  return (
    <>
      <ModuleNavbar />
      <div className="modulepage-container">
        <FeaturedModulesCart />
        <ContinueLastCourse />
      </div>
      <Footer />
    </>
  );
}

export default ModulesPage;
