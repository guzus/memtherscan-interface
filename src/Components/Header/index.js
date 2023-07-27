import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async';

const HeaderSection = styled.section`
  padding: 20px;
  justify-content: center;
  cursor: grab;
`

export default function Header(props) {
  const nav = useNavigate()
  return (
    <>
      <Helmet>
        <title>{props.title}</title>

        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:site_name" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.imgsrc} />
        <meta property="og:url" content={props.url} />

        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.imgsrc} />

        <link rel="canonical" href={props.url} />
      </Helmet>
      <HeaderSection>
        <h1 className="title" onClick={() => nav('/')}>
          Memtherscan
        </h1>
      </HeaderSection>
    </>
    
    );
};
