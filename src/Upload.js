import "./App.css";
import React, { useState } from "react";
import Header from "./Header";

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
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
        <div>{isUploadSuccessful ? <div>success</div> : <></>}</div>
      </div>
    </>
  );
}

export default FileUploadPage;
