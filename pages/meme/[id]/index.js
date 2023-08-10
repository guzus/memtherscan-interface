import React, { useEffect, useState } from "react";
import Image from "../../../components/image";
import Header from "../../../components/header";
import Footer from "../../components/footer";
import { BASE_URL } from "../../../constants";
import { useRouter } from "next/router";

function Detail({ params }) {
  const router = useRouter();
  const { id } = router.query;
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  fetch(BASE_URL + `/image/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`,
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
      <div>{Image({ url, id })}</div>
      <Footer />
    </>
  );
}

export default Detail;
