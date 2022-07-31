import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FileUploadPage from './Upload'
import Home from "./Home"


function Detail() {
  return <>hi</>
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/upload" element={<FileUploadPage />} />
            <Route path="/meme/*" element={<Detail />} />
        </Routes>
    </div>
  )
}

export default App
