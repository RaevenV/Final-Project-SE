import React from "react";
import FeaturedModulesCart from "./FeaturedModulesCart/FeaturedModulesCart";
import Footer from "../Universal Components/footer"
import ContinueLastCourse from "./ContinueLastCourse/ContinueLastCourse";
import HomeNavbar from "../Universal Components/navbars/homeNavbar";
import ModuleSearchbar from "../Universal Components/Search & Filter/moduleSearchbar";
import './modulesPage.css';

function ModulesPage() {
  return (
    <>
      <HomeNavbar/>
      <div className="modulepage-container">
        <FeaturedModulesCart />
        <ContinueLastCourse />
        <ModuleSearchbar/>
      </div>
      <Footer />
    </>
  );
}

export default ModulesPage;
