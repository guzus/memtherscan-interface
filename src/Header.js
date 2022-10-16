import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderSection = styled.section`
  padding: 20px;
  justify-content: center;
  `

export default function Header() {
  return (
    <HeaderSection>
      <Link className="title" to="/">
        Memtherscan
      </Link>
    </HeaderSection>
  );
}
