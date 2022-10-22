import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FileUploadPage from "./Upload";
import MissionPage from "./Mission";
import Detail from "./Detail";
import Home from "./Home";
import Footer from "./Footer";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/upload" element={<FileUploadPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/meme/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
