import React from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterSection = styled.section`
  padding: 20px;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterSection className="bg-dark text-center text-white">
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "white" }}>
        <Link href="https://twitter.com/AirdropBrokers">
          <div style={{ fontSize: "40px", color: "pink" }}>twitter</div>
        </Link>
        <Link href="https://discord.gg/K4nFPbPHm">
          <div style={{ fontSize: "40px", color: "pink" }}>discord</div>
        </Link>

        <p style={{ fontSize: "15px", color: "gray" }}>© 2023 Memtherscan</p>
      </div>
    </FooterSection>
  );
}
