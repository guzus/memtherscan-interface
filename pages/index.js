import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from "react";
import Image from "../components/image/index.js";
import Header from "../components/header";
import { BASE_URL } from "../constants";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Footer from "../components/footer/index.js";

function TagBar(createQueryString) {
  const router = useRouter();
  const pathname = usePathname();
  const tags = [
    { title: "# latest", key: "sortByTimestamp", value: "desc" },
    { title: "# trending", key: "tag", value: "trending" },
    { title: "# ethereum", key: "tag", value: "ethereum" },
  ];

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {tags.map(({ title, key, value }) => (
        <button
          className="tag"
          key={title}
          onClick={() => {
            router.push(pathname + "?" + createQueryString(key, value));
          }}
        >
          {title}
        </button>
      ))}
      {/*<TagCard title={"upload"} key={"upload"} />*/}
      <button className="tag" onClick={() => router.push("/upload")}>
        upload
      </button>
      <button className="tag" onClick={() => router.push("/mission")}>
        about us
      </button>
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
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

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
      <div style={{ borderStyle: "dashed", borderRadius: 5 }}></div>
      {TagBar(createQueryString)}
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      <div>
        {data &&
          data.map(({ id, url }) => <div key={id}>{Image({ id, url })}</div>)}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
