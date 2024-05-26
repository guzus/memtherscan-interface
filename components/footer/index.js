import React from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterSection = styled.section`
  padding: 5vw;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterSection className="bg-dark text-center text-white">
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "white" }}>
        <Link href="https://twitter.com/memtherscan">
          <div
            style={{
              fontSize: "1.5em",
              padding: "1em",
              color: "white",
              background: "black",
            }}
          >
            twitter
          </div>
        </Link>
        <Link href="https://discord.gg/K4nFPbPHm">
          <div
            style={{
              fontSize: "1.5em",
              padding: "1em",
              color: "white",
              background: "purple",
            }}
          >
            discord
          </div>
        </Link>
        <Link href="https://t.me/+n8UUBiFa4d4xOTM1">
          <div
            style={{
              fontSize: "1.5em",
              padding: "1em",
              color: "white",
              background: "skyblue",
            }}
          >
            telegram
          </div>
        </Link>

        <p style={{ fontSize: "1em", padding: "1em", color: "gray" }}>
          © 2024 Memtherscan
        </p>
      </div>
    </FooterSection>
  );
}
