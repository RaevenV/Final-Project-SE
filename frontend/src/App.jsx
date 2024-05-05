import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home Page/homePage";
import "./App.css";
import LibraryPage from "./Library Page/libraryPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/library" exact element={<LibraryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
