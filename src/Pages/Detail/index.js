import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Image from "../../Components/Image/index.js";
import Header from "../../Components/Header";

function Detail() {
  const { id } = useParams();
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const BASE_URL = "https://crypto-meme-server-k5sr2csqpa-ue.a.run.app";
  const nav = useNavigate();

  useEffect(() => {
    fetch(BASE_URL + `/image/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then(({ url }) => {
        setUrl(url);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setUrl(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {Header({
        title: "Memtherscan | Meme",
        description: "The Crypto meme Aggregator",
        keywords: "crypto, meme",
        imgsrc: url,
      })}
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      <div>{Image({ url, id }, nav, imageLoaded, setImageLoaded)}</div>
    </>
  );
}

export default Detail;
