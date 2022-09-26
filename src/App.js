import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FileUploadPage from './Upload'
import Detail from './Detail'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/upload" element={<FileUploadPage />} />
        <Route path="/meme/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
