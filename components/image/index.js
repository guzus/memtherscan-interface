import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRouter } from "next/navigation";
import { formatDate } from "../../lib/date";

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
  border: 10px solid orangered;
  border-radius: 10px;
  // border-style: dashed;
`;

const ImageTag = styled.div`
  color: orangered;
  background: antiquewhite;
  padding: 1px;
`;

function Image({ id, url, tags, timestamp }) {
  const router = useRouter();
  return (
    <Frame className="meme">
      <div className="tags">
        {tags &&
          tags.map(({ name }) => {
            return (
              <ImageTag className="tag" key={name}>
                #{name}
              </ImageTag>
            );
          })}
      </div>
      <LazyLoadImage
        src={url}
        alt="crypto-meme"
        onClick={() => router.push(`/meme/${id}`)}
      />
      <div>
          {timestamp !== "0001-01-01T00:00:00Z" &&
            <div>
              uploaded {formatDate(timestamp)}
            </div>
          }
      </div>

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
