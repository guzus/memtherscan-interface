import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styled from "styled-components";
import Image from "../../components/image";

const PageWrapper = styled.div``;

const TextWrapper = styled.section`
  padding: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

function KabosuPage() {
  return (
    <PageWrapper>
      <Header></Header>
      <div>
        <TextWrapper style={{ textAlign: "center" }}>
          <h1>Rest In Peace, Kabosu</h1>
          <h1>We will never forget you.</h1>
          <br />
          <Image
            id="7OTWgjA59hSEHJf9rQmV"
            url="https://r2-public-worker.golanger.workers.dev/dc958412-da3a-4c4c-a60c-d306e7c37850_kabosu.webp"
          />
          <Image
            id="KBKytyaykuvI9usuwzBD"
            url="https://r2-public-worker.golanger.workers.dev/57410f21-d959-4a39-ade0-76a0a7303d6f_kabosu2.webp"
          />
          <Image
            id="XJhSzmCX4nJr6gVNzJGd"
            url="https://r2-public-worker.golanger.workers.dev/b3a4146e-ef88-4e27-a0a5-e69be326963b_kabosu3.webp"
          />
          <Image
            id="LUG7AiGHhEBWkmtown2N"
            url="https://r2-public-worker.golanger.workers.dev/0c99d432-73d9-4749-aa6c-72ffab2ff27e_IMG_9259.jpeg"
          />
        </TextWrapper>
      </div>
      <img src="" style={{ "max-width": "400px", width: "100%" }} />
      <Footer />
    </PageWrapper>
  );
}

export default KabosuPage;
