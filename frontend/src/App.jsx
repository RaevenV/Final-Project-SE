import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home Page/homePage";
import "./App.css";
import LibraryPage from "./Library Page/libraryPage";
import LoginPage from "./Login Register Page/Login Page/loginPage";
import RegisterPage from "./Login Register Page/Register Page/registerPage";
import ProfilePage from "./Profile Page/profilePage"
import EditProfilePage from "./Profile Page/Edit Profile Page/editProfilePage"
import ModulesPage from "./Modules Page/modulesPage";
import ModulePreview from "./Modules Page/Module Preview Page/modulePreview";
import SplashPage from "./Splash Page/splashPage";
import ForumPreviewPage from "./Forum Page/Forum Preview Page/forumPreviewPage"
import ForumPage from "./Forum Page/forumPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" exact element={<HomePage />} />
          <Route path="/libraryPage" exact element={<LibraryPage />} />
          <Route path="/loginPage" exact element={<LoginPage/>} />
          <Route path="/registerPage" exact element={<RegisterPage/>} />
          <Route path="/profile" exact element={<ProfilePage />} />
          <Route path="/editProfile" exact element={<EditProfilePage />} />
          <Route path="/modulesPage" exact element={<ModulesPage />} />
          <Route path="/modulePreview/:searchID" exact element={<ModulePreview />} />
          <Route path="/" exact element = {<SplashPage/>}/>
          <Route path="/forumPage" exact element={<ForumPage />} />
          <Route path="/forumPreview/:searchParam" exact element={<ForumPreviewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;