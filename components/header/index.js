import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";

const HeaderSection = styled.section`
  padding: 20px;
  text-align: center;
`;

const favicon = "https://memtherscan.xyz/favicon.ico";

export default function Header({
  title = "Memtherscan",
  description = "The Centre of Crypto Memes and Culture",
  keywords = "crypto, meme",
  imgsrc = favicon,
  url = "https://memtherscan.xyz",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        {/* imgsrc */}
        <meta property="og:image" content={favicon} />
        <meta property="og:url" content={url} />

        <meta name="twitter:site" content="@memtherscan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* imgsrc */}
        <meta name="twitter:image" content={favicon} />

        <link rel="canonical" href={url} />
      </Head>
      <HeaderSection>
        <h1 className="title">
          <Link href={"/"} style={{ "font-family": "Georgia", "color": "yellow", "background": "red", "padding": "10px" }}
          >
            Memtherscan
          </Link>
        </h1>
      </HeaderSection>
    </>
  );
}
