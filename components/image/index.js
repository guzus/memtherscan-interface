import React from "react";
import styled, { keyframes, css } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRouter } from "next/navigation";
import { formatDate } from "../../lib/date";
import Link from "next/link";

const horizontalShiver = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(2px); }
`;

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
  border: 2px solid gray;
  border-radius: 10px;
  ${({ shiver, shiverDuration }) =>
    shiver &&
    css`
      animation: ${horizontalShiver} ${shiverDuration || "0.1s"} infinite;
    `}
`;

const ImageTag = styled.div`
  color: orangered;
  background: antiquewhite;
  padding: 1px;
`;

function Image({
  id,
  url,
  tags,
  links,
  timestamp,
  shiver = true,
  shiverDuration = "1s",
}) {
  const router = useRouter();
  return (
    <Frame className="meme" shiver={shiver} shiverDuration={shiverDuration}>
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
      <div className="links">
        {links &&
          links.map(({ platform, url }) => {
            return (
              <ImageTag className="link" key={url}>
                <Link href={url}>
                  {platform} : {url}
                </Link>
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
        {timestamp !== "0001-01-01T00:00:00Z" && timestamp && (
          <div>uploaded {formatDate(timestamp)}</div>
        )}
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
