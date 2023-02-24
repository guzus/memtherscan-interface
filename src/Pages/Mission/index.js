import './../../App.css'
import React from 'react'
import Header from '../../Components/Header'
import styled from 'styled-components'

const TextWrapper = styled.section`
  padding: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`

function MissionPage() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>Our mission: Illuminating the (not-so-dark) crypto meme forest</h1>
        <img className="missionImage" src="/image/keep-calm-yes-we-scan-5.png"/>
        <TextWrapper>
          <h2>Joy & Chill is one of the greatest Crypto's utility.</h2>
          We value the good vibe of crypto communities, and are working hard to
          make it to the next level.
        </TextWrapper>
        <TextWrapper>
          <h2>Roadmap</h2>
          <ul>
            <div>- View by Tag Feature</div>
            <div>- Log In with Metamask</div>
            <div>- Vote feature</div>
            <div>- Diverse web3 API integration ex) etherscan.io</div>
            <div>- Meme recommendation Feature</div>
            <div>- MemtherscanDAO</div>
            <div>... Much more to come!</div>
          </ul>
        </TextWrapper>
        <TextWrapper>
          <h2>Finding someone to work together!</h2>
          If you want to join us or have anything to discuss, contact us through
          email (awesomepulsar@gmail.com) or twitter (@AirdropBrokers)!
        </TextWrapper>
      </div>
    </>
  )
}

export default MissionPage
