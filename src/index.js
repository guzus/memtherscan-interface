import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga4'
const TRACKING_ID = 'G-76SSRFV483' // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID)

const root = ReactDOM.createRoot(document.getElementById('root'))
window.addEventListener('load', () => {
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
  )
})
