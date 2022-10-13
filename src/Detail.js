import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "./Image.js";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://crypto-meme-server.herokuapp.com/image/${id}`)
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
      <Link className="title" to="/">
        Memtherscan
      </Link>
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      <div>{Image({ url })}</div>
    </>
  );
}

export default Detail;
