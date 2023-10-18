import React, { useEffect, useState } from "react";
import Image from "../../../components/image";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { BASE_URL } from "../../../constants";
import { useRouter } from "next/router";
import Loading from "../../../components/loading";

function Detail({ params }) {
  const router = useRouter();
  const { id } = router.query;
  const [url, setUrl] = useState(null);
  const [tags, setTags] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        .then(({ url, tags, timestamp }) => {
          setUrl(url);
          setTags(tags);
          setTimestamp(timestamp);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setUrl(null);
        })
        .finally(() => {
          setLoading(false);
        });
  }, []);

  return (
    <div style={{ background: "skyblue" }}>
      {Header({
        title: "Memtherscan | Meme",
        description: "The Crypto meme Aggregator",
        keywords: "crypto, meme",
        imgsrc: url,
      })}
      {loading && Loading()}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      <div>{Image({ id, url, tags, timestamp })}</div>
      <Footer />
    </div>
  );
}

export default Detail;
