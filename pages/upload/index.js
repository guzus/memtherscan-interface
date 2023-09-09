import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styled from "styled-components";
import Modal from "../../components/modal";
import { BASE_URL } from "../../constants";
import { useRouter } from "next/navigation";

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
              padding: "8px",
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
      <Header></Header>
      <div>
        <UploadWrapper>
          <h2>Upload an image</h2>
          {/*<div>*/}
          {/*  Choose tags*/}
          {/*</div>*/}
          <input type="file" name="file" onChange={changeHandler} />
          {isFilePicked ? (
            <div>
              {/*<p>Filename: {selectedFile.name}</p>*/}
              {/* <p>Filetype: {selectedFile.type}</p> */}
              <br/>
              <p>Size: {selectedFile?.size / 1000} KB</p>
              {/* <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p> */}
            </div>
          ) : (
            <p></p>
          )}
          <br />
          <i>NOTE: mp4 isn't supported yet! (we're working on it)</i>
        </UploadWrapper>
        <SubmitWrapper>
          <div>
            <button onClick={handleSubmission}>Submit</button>
          </div>
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
