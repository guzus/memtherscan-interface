import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRouter } from "next/navigation";

const Wrapper = styled.section`
  padding: 10px;
  background: papayawhip;
`;

const UtilBox = styled.section`
  padding: 5px;
  display: flex;
  justify-content: center;
`;

const Frame = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
  border: 10px solid pink;
  border-radius: 10px;
  // border-style: dashed;
`;

function Image({id, url, tags}) {
  const router = useRouter();
  return (
    <Frame className="meme">
        <div className="tags">
            {tags && tags.map(({name}) => {
                return <div className="tag" key={name}># {name}</div>
            })}
        </div>
      <LazyLoadImage
        src={url}
        alt="crypto-meme"
        onClick={() => router.push(`/meme/${id}`)}
      />
      {/* <UtilBox className="vote"> */}
      {/* <Wrapper>
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
        </Wrapper> */}
      {/* </UtilBox> */}
    </Frame>
  );
}

export default Image;
