import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styled from "styled-components";
import Modal from "../../components/modal";
import { BASE_URL } from "../../constants";
import { useRouter } from "next/navigation";

const UploadWrapper = styled.section`
  padding: 2em;
  width: 80vw;
  margin: 2vh auto;
  border: solid 0.1em black;
  border-radius: 1em;
  background-color: #f9f9f9;
`;

const SubmitWrapper = styled.section`
  padding: 1em;
  width: 80vw;
  margin: 2vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1em;
`;

const SubmitButton = styled.button`
  padding: 1em 2em;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  font-size: 1em;
  margin-top: 1em;

  &:hover {
    background-color: #005bb5;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  padding: 1em 2em;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  font-size: 1em;
  margin-top: 1em;
  display: inline-block;

  &:hover {
    background-color: #005bb5;
  }
`;

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [tags, setTags] = useState([]);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);
  const [isUploadSubmitted, setIsUploadSubmitted] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    setIsUploadSubmitted(true);
    const formData = new FormData();

    formData.append("tags", tags);
    formData.append("file", selectedFile);

    fetch(BASE_URL + "/upload", {
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

  const router = useRouter();

  return (
    <>
      {isUploadSuccessful && (
        <Modal close={() => setIsUploadSuccessful(!isUploadSuccessful)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2em",
            }}
          >
            <div style={{ width: "100%", color: "white" }}>
              <div>Submission Complete!</div>
              <button onClick={() => router.push("/?sortByTimestamp=desc")}>
                🔎Check out the meme you just uploaded
              </button>
            </div>
          </div>
        </Modal>
      )}
      <Header />
      <div>
        <UploadWrapper>
          <h2>Upload an image</h2>
          <FileInputLabel htmlFor="file">Choose File</FileInputLabel>
          <FileInput
            type="file"
            id="file"
            name="file"
            onChange={changeHandler}
          />
          {isFilePicked ? (
            <div>
              <br />
              <p>Size: {selectedFile?.size / 1000} KB</p>
            </div>
          ) : (
            <p></p>
          )}
          <br />
          <i>NOTE: mp4 isn't supported yet! (we're working on it)</i>
        </UploadWrapper>
        <SubmitWrapper>
          <SubmitButton onClick={handleSubmission}>Submit</SubmitButton>
          <div>
            {isUploadSuccessful ? (
              <>
                <div>Upload Complete!</div>
              </>
            ) : isUploadSubmitted ? (
              <div>Uploading...</div>
            ) : (
              <></>
            )}
          </div>
        </SubmitWrapper>
      </div>
      <Footer />
    </>
  );
}

export default FileUploadPage;
