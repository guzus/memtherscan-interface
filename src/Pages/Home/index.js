import './../../App.css'
import { useNavigate } from 'react-router-dom'
import React, { useEffect} from 'react'
import Image from '../../Components/Image/index.js'
import Navbar from '../../Components/Navbar'
import { memeFetch } from '../../API/Api'
import { useQuery } from 'react-query'
import console from 'console-browserify'

// TODO: tag
function Home() {

  const nav = useNavigate()
  useEffect(()=>{
    memeFetch()
  },[])

  const {data, isLoading, isError} = useQuery("memeFetchQuery", memeFetch)

  console.log(data)

  return (
    <div className="App">
      <h1 className="title">Memtherscan</h1>
      {isLoading? "A moment please...": ""}
      {isError? `There is a problem fetching the data - ${isError}`: ""}
      <div>
        <Navbar/>
        {data &&
          data.map(({ id, url }) => (
            <div key={id}>{Image({ id, url }, nav)}</div>
          ))}
      </div>
    </div>
  )
}

export default Home
