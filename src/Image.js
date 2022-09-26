import './App.css'
import { AiFillCaretDown, AiFillCaretUp, AiFillMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import React from 'react'

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
        <Link to={`/meme/${props.id}`} className="vote">
          look
        </Link>
      </div>
    </div>
  )
}

export default Image
