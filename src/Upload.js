import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";

const UploadWrapper = styled.section`
  padding: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border: solid 0.1em;
  border-radius: 10px;
  border-color: black;
`;

const SubmitWrapper = styled.section`
  padding: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("file", selectedFile);

    fetch("https://crypto-meme-server.herokuapp.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setIsUploadSuccessful(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Header></Header>
      <div>
        <UploadWrapper>
          <input type="file" name="file" onChange={changeHandler} />
          {isFilePicked ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              {/* <p>Filetype: {selectedFile.type}</p> */}
              <p>Size in bytes: {selectedFile.size}</p>
              {/* <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p> */}
            </div>
          ) : (
            <p></p>
          )}
        </UploadWrapper>
        <SubmitWrapper>
          <div>
            <button onClick={handleSubmission}>Submit</button>
          </div>
          <div>{isUploadSuccessful ? <div>success</div> : <></>}</div>
        </SubmitWrapper>
      </div>
    </>
  );
}

export default FileUploadPage;
