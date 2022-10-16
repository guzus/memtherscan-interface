import './App.css'
import { AiFillCaretDown, AiFillCaretUp, AiFillMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 10px;
  background: papayawhip;
`;

const UtilBox = styled.section`
  padding: 5px;
  display: flex;
  justify-content: center;  
  `

function Image(props) {
  return (
    <div className="meme">
      <img src={props.url} alt="crypto-meme">
        {props.value}
      </img>
      <UtilBox className="vote">
        <Wrapper>
          <AiFillCaretUp />
          upvote
        </Wrapper>
        <Wrapper>
          <AiFillCaretDown />
          downvote
        </Wrapper>
        <Wrapper>
          <AiFillMessage />
          comment
        </Wrapper>
        <Wrapper>
          <Link to={`/meme/${props.id}`} className="vote">
            look
          </Link>
        </Wrapper>
      </UtilBox>
    </div>
  )
}

export default Image
