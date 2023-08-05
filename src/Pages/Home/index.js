import "./../../App.css";
import { AiFillFormatPainter, AiOutlineRise } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Image from "../../Components/Image/index.js";
import Header from "../../Components/Header";
import { BASE_URL } from "../../Constants";

function Upload() {
  const nav = useNavigate();
  return (
    <div onClick={() => nav("/upload")} className="tag upload">
      upload!
    </div>
  );
}

function Mission() {
  const nav = useNavigate();
  return (
    <div onClick={() => nav("/mission")} className="tag">
      Our mission
    </div>
  );
}

function TagBar(setSearchParams) {
  return (
    <div className="tags">
      <button className="tag" onClick={() => setSearchParams("?tag=trending")}>
        <AiOutlineRise /> trending
      </button>
      <button className="tag" onClick={() => setSearchParams("?tag=ethereum")}>
        <AiFillFormatPainter /> ethereum
      </button>
      {Upload()}
      {Mission()}
    </div>
  );
}

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const nav = useNavigate();
  useEffect(() => {
    const tag = searchParams.get("tag");
    let url;
    if (tag) {
      url = BASE_URL + `/image?shuffle=true&tag=${tag}`;
    } else {
      url = BASE_URL + `/image?shuffle=true`;
    }
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

  return (
    <div className="App">
      <Header />
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      {TagBar(setSearchParams)}
      <div>
        {data &&
          data.map(({ id, url }) => (
            <div key={id}>{Image({ id, url }, nav)}</div>
          ))}
      </div>
    </div>
  );
}

export default Home;
