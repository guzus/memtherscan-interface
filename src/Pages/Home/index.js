import './../../App.css'
import { AiFillFormatPainter, AiOutlineRise } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Image from '../../Components/Image/index.js'

function Upload() {
  return (
    <Link to="/upload" className="tag upload">
      upload!
    </Link>
  )
}

function Mission() {
  return (
    <Link to="/mission" className="tag">
      Our mission
    </Link>
  )
}

function TagBar() {
  return (
    <div className="tags">
      <button className="tag">
        <AiOutlineRise /> trending
      </button>
      <button className="tag">
        <AiFillFormatPainter /> ethereum
      </button>
      {Upload()}
      {Mission()}
    </div>
  )
}

// TODO: tag
function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const BASE_URL = 'https://crypto-meme-server-k5sr2csqpa-ue.a.run.app'

  useEffect(() => {
    fetch(BASE_URL + '/image?shuffle=true')
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
      <h3 className="title">Memtherscan</h3>
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      {TagBar()}
      <div>
        {data &&
          data.map(({ id, url }) => <div key={id}>{Image({ id, url })}</div>)}
      </div>
    </div>
  )
}

export default Home
