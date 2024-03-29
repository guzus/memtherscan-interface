import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styled from "styled-components";
import Link from "next/link";

const TextWrapper = styled.section`
  padding: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

function MissionPage() {
  return (
    <>
      <Header></Header>
      <div>
        <TextWrapper>
          <h1>Our mission: Illuminating the dark forest of crypto meme</h1>
          <br />
          <h2>The Centre of Crypto Culture.</h2>
          We value the good vibe of crypto communities, and are working hard to
          make it to the next level.
        </TextWrapper>
        <TextWrapper>
          <h2>Team</h2>
          <ul>
            <div>
              -
              <Link
                href="https://x.com/uncanny_guzus"
                style={{
                  textDecoration: "underline",
                }}
              >
                guzus (dev)
              </Link>
            </div>
          </ul>
        </TextWrapper>
        <TextWrapper>
          <h2>Roadmap (upcoming features)</h2>
          <ul>
            <div>- Memepool</div>
            <div>- Meme merge</div>
            <div>- Meme rollup</div>
            <div>- Web3 Login</div>
            <div>- Meme-Voting</div>
            <div>- Memecoin Shilling</div>
            <div>- Meme hierarchy pyramid feature</div>
            <div>... And much more to come!</div>
          </ul>
        </TextWrapper>
        <TextWrapper>
          <h2>FAQ</h2>
          If you want to join us or have anything to discuss, contact us through
          email (
          <Link
            href="mailto:awesomepulsar@gmail.com"
            style={{
              textDecoration: "underline",
            }}
          >
            awesomepulsar@gmail.com
          </Link>
          ) or twitter (
          <Link
            href="https://twitter.com/memtherscan"
            style={{
              textDecoration: "underline",
            }}
          >
            @memtherscan
          </Link>
          )!
        </TextWrapper>
      </div>
      <img src="favicon.ico" style={{ "max-width": "400px", width: "100%" }} />
      <Footer />
    </>
  );
}

export default MissionPage;
