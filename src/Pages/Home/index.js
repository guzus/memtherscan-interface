import "./../../App.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Image from "../../Components/Image/index.js";
import Header from "../../Components/Header";
import { BASE_URL } from "../../Constants";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

function TagBar(setSearchParams) {
  const tags = [
    { title: "latest", searchParam: "?sortByTimestamp=desc" },
    { title: "trending", searchParam: "?tag=trending" },
    { title: "ethereum", searchParam: "?tag=ethereum" },
  ];
  const nav = useNavigate();

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {tags.map(({ title, searchParam }) => (
        <TagCard
          itemId={searchParam} // NOTE: itemId is required for track items
          title={title}
          key={searchParam}
          onClick={() => setSearchParams(searchParam)}
          // selected={isItemSelected(id)}
        />
      ))}
      <TagCard title={"upload"} onClick={() => nav("/upload")} />
      <TagCard title={"about us"} onClick={() => nav("/mission")} />
    </ScrollMenu>
  );
}

function TagCard({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <button onClick={() => onClick(visibility)} tabIndex={0} className="tag">
      <div>{title}</div>
      {/* <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div> */}
    </button>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      {/* Left */}
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
      {/* Right */}
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
    const sortByTimestamp = searchParams.get("sortByTimestamp");
    let url;
    if (tag) {
      url = BASE_URL + `/image?shuffle=true&tag=${tag}`;
    } else {
      url = BASE_URL + `/image?shuffle=true`;
    }
    if (sortByTimestamp) {
      url += `&sortByTimestamp=${sortByTimestamp}`;
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
      {TagBar(setSearchParams)}
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
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
