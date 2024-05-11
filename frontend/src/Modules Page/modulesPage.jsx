import React from "react";
import ModuleNavbar from "../Universal Components/navbars/moduleNavbar";
import FeaturedModulesCart from "./FeaturedModulesCart/FeaturedModulesCart";
import Footer from "../Universal Components/footer"

function ModulesPage() {
  return (
    <>
      <ModuleNavbar />
      <div className="modulepage-container">
        <FeaturedModulesCart />
      </div>
      <Footer />
    </>
  );
}

export default ModulesPage;
