import './App.css'
import React, { useEffect, useState } from 'react'
import {
  AiFillCaretUp,
  AiOutlineRise,
  AiFillFormatPainter,
  AiFillCaretDown,
  AiFillMessage,
} from 'react-icons/ai'
import { Routes, Route, Link } from 'react-router-dom'
import FileUploadPage from './Upload'

function Image(props) {
  return (
    <div className="meme">
      <img src={props.url} alt="crypto-meme">
        {props.value}
      </img>
      <div className="vote">
        <AiFillCaretUp />
        upvote
        <AiFillCaretDown />
        downvote
        <AiFillMessage />
        comment
      </div>
    </div>
  )
}

function Upload() {
  return <Link to="/upload" className="tag upload">upload!</Link>
}

function TagBar() {
  return (
    <div className="tags">
      <button className="tag">
        <AiOutlineRise /> trending
      </button>
      <button className="tag">
        <AiFillFormatPainter /> ethereum merge
      </button>
      {Upload()}
    </div>
  )
}

function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://crypto-meme-server.herokuapp.com/image')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          )
        }
        return response.json()
      })
      .then((actualData) => {
        setData(actualData)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setData(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <h3 className="title">
        Memtherscan -<div></div>
        The Crypto Meme library of Alexandria
      </h3>
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      {TagBar()}
      <div>
        {data &&
          data.map(({ id, url }) => <div key={id}>{Image({ url })}</div>)}
      </div>
    </div>
  )
}

function Detail() {
  return <>hi</>
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/upload" element={<FileUploadPage />} />
            {/*<Route path="/meme/*">*/}
            {/*    <Detail />*/}
            {/*</Route>*/}
        </Routes>
    </div>
  )
}

export default App
