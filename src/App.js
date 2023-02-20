import './App.css'
import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import FileUploadPage from './Pages/Upload'
import MissionPage from './Pages/Mission'
import Detail from './Pages/Detail'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import ReactGA from 'react-ga4'

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<FileUploadPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/meme/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
