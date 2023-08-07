import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";

const HeaderSection = styled.section`
  padding: 20px;
  justify-content: center;
  cursor: grab;
`;

export default function Header(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:site_name" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.imgsrc} />
        <meta property="og:url" content={props.url} />

        <meta name="twitter:site" content="@AirdropBrokers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image:src" content={props.imgsrc} />

        <link rel="canonical" href={props.url} />
      </Head>
      <HeaderSection>
        <h1 className="title">
          <Link href={"/"}>Memtherscan</Link>
        </h1>
      </HeaderSection>
    </>
  );
}
