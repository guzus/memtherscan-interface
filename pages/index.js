import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { BASE_URL } from "../constants";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

// Dynamic Imports
const Image = dynamic(() => import("../components/image/index.js"));
const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer/index.js"));
const ReferralAd = dynamic(() => import("../components/card/referralAd.js"));
const Loading = dynamic(() => import("../components/loading/index.js"), {
  ssr: false,
});

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

const speicalTagStyle = {
  color: "white",
  background: "#daa520",
};

function TagBar({ createQueryString }) {
  const router = useRouter();
  const pathname = usePathname();
  const tags = useMemo(
    () => [
      { title: "#latest", key: "sortByTimestamp", value: "desc" },
      { title: "#trending", key: "tag", value: "trending" },
      { title: "#ethereum", key: "tag", value: "ethereum" },
    ],
    []
  );

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
      <button
        className="tag"
        onClick={() => router.push("/kabosu")}
        style={speicalTagStyle}
      >
        Remembering Kabosu
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
    let url = BASE_URL + `/image?shuffle=true`;

    if (tag) {
      url += `&tag=${tag}`;
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
      <TagBar createQueryString={createQueryString} />
      {loading && <Loading />}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      <div>
        {data &&
          data.map(({ id, url, tags, timestamp }, i) => (
            <React.Fragment key={id}>
              {i === 5 && (
                <ReferralAd
                  title="friend.tech referral codes"
                  text={referralCodes}
                  website="https://friend.tech"
                />
              )}
              {i === 10 && (
                <ReferralAd
                  title="Farcaster(warpcast) invite link"
                  text={""}
                  website="https://warpcast.com/~/invite-page/245998?id=3c13d47b"
                />
              )}
              <Image id={id} url={url} tags={tags} timestamp={timestamp} />
            </React.Fragment>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
