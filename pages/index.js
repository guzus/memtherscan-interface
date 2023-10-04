import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from "react";
import Image from "../components/image/index.js";
import Header from "../components/header";
import { BASE_URL } from "../constants";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Footer from "../components/footer/index.js";
import ReferralAd from "../components/card/referralAd.js";
import Loading from "../components/loading/index.js";

const referralCodes =
  "ft-01miicfc" +
  "\n" +
  "ft-vvcqnz69" +
  "\n" +
  "ft-vrv4jnv2" +
  "\n" +
  "ft-81h0dwzb";
const tagStyle = {
  color: "red",
  background: "yellow",
};

const infoTagStyle = {
  color: "white",
  background: "blue",
};

function TagBar(createQueryString) {
  const router = useRouter();
  const pathname = usePathname();
  const tags = [
    { title: "#latest", key: "sortByTimestamp", value: "desc" },
    { title: "#trending", key: "tag", value: "trending" },
    { title: "#ethereum", key: "tag", value: "ethereum" },
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
          style={tagStyle}
        >
          {title}
        </button>
      ))}
      <button
        className="tag"
        onClick={() => router.push("/upload")}
        style={infoTagStyle}
      >
        upload
      </button>
      <button
        className="tag"
        onClick={() => router.push("/about")}
        style={infoTagStyle}
      >
        wtf?
      </button>
    </ScrollMenu>
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
    <div className="App" style={{ background: "skyblue" }}>
      <Header />
      {TagBar(createQueryString)}
      {loading && Loading()}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      <div>
        {data &&
          data.map(({ id, url, tags, timestamp }, i) => {
            if (i === 5) {
              return (
                <React.Fragment key={id}>
                  <ReferralAd
                    title="friend.tech referral codes"
                    text={referralCodes}
                    website="https://friend.tech"
                  />
                  <div key={id}>{Image({ id, url, tags, timestamp })}</div>
                </React.Fragment>
              );
            }
            return <div key={id}>{Image({ id, url, tags, timestamp })}</div>;
          })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
