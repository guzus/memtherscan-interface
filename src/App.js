import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FileUploadPage from "./Upload";
import Detail from "./Detail";
import Home from "./Home";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/upload" element={<FileUploadPage />} />
        <Route path="/meme/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
