import "./../../App.css";
import { AiFillCaretDown, AiFillCaretUp, AiFillMessage } from "react-icons/ai";
import React, { useState } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Wrapper = styled.section`
  padding: 10px;
  background: papayawhip;
`;

const UtilBox = styled.section`
  padding: 5px;
  display: flex;
  justify-content: center;
`;

function Image(props, nav, imageLoaded, setImageLoaded) {
  const placeholderSrc = "favicon.ico";

  return (
    <div className="meme">
      <div>
        {!imageLoaded && <img src={placeholderSrc} alt="memtherscan-loading" />}
        <img
          src={props.url}
          alt="memtherscan-meme"
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>
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
          <div onClick={() => nav(`/meme/${props.id}`)} className="vote">
            🔎look
          </div>
        </Wrapper>
      </UtilBox>
    </div>
  );
}

export default Image;
