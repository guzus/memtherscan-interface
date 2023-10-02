import React from "react";
import styled from "styled-components";

const LoadingSection = styled.section`
  padding: 100px;
  margin: 100px;
  text-align: center;
`;

export default function Loading() {
  return (
    <LoadingSection>
      <h2>A moment please...</h2>
      <video src="loading.gif" alt="loading" type="video/gif" />
    </LoadingSection>
  );
}
