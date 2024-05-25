import React, { useEffect, useState, useMemo, useCallback } from "react";
import Image from "../../../components/image";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { BASE_URL } from "../../../constants";
import { useRouter } from "next/router";
import Loading from "../../../components/loading";

function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({
    url: null,
    tags: null,
    links: null,
    timestamp: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    if (!id) return;
    try {
      const response = await fetch(BASE_URL + `/image/${id}`);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      const result = await response.json();
      setData({
        url: result.url,
        tags: result.tags,
        links: result.links,
        timestamp: result.timestamp,
      });
      setError(null);
    } catch (err) {
      setError(err.message);
      setData({ url: null, tags: null, links: null, timestamp: null });
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const memoizedHeader = useMemo(
    () => (
      <Header
        title="Memtherscan | Meme"
        description="The Crypto meme Aggregator"
        keywords="crypto, meme"
        imgsrc={data.url}
      />
    ),
    [data.url]
  );

  return (
    <div className="App" style={{ background: "lightblue" }}>
      {memoizedHeader}
      {loading ? (
        <Loading />
      ) : error ? (
        <div>{`There is a problem fetching the data - ${error}`}</div>
      ) : (
        <Image
          id={id}
          url={data.url}
          tags={data.tags}
          links={data.links}
          timestamp={data.timestamp}
        />
      )}
      <Footer />
    </div>
  );
}

export default Detail;
