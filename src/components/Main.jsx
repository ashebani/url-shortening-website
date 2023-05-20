import React, { useRef, useState } from "react";
import ShortenedLinks from "./ShortenedLinks";

const Main = () => {
  const statisticsInfo = [
    {
      img: "brand-recognition",
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      img: "detailed-records",
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      img: "fully-customizable",
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const inputRef = useRef();

  const dataFetcher = (e) => {
    e.preventDefault();
    const API_URL = "https://api.shrtco.de/v2/shorten?url=";
    if (inputRef.current.value === "") {
      return;
    }
    const websiteURL = new URL(inputRef.current.value);
    const fullWebsiteURL = websiteURL.host.slice(4);
    console.log(fullWebsiteURL);
    fetch(API_URL + fullWebsiteURL)
      .then((res) => res.json())
      .then((data) =>
        setShortenedLinks([
          ...shortenedLinks,
          {
            link: inputRef.current.value,
            shortenedLink: data["result"].full_short_link,
          },
        ])
      );
  };

  return (
    <main>
      <div className="grid overflow-hidden justify-center relative lg:flex lg:flex-row-reverse px-6 md:pt-24 md:px-20 lg:px-40 md:text-left text-center py-10">
        <div className="flex-1 lg:max-w-md md:p-0 px-10">
          <img
            className="lg:scale-150 md:scale-[120%] scale-[120%] -z-10 lg:translate-x-28 md:translate-x-1/5 translate-x-1/4"
            srcSet={require("../images/illustration-working.svg").default}
            alt="illustration-working"
          />
        </div>
        <div className="z-10 md:flex-2 lg:flex-1 md:text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold pt-8 -tracking-wider">
            More than just
            <br className="hidden lg:inline" /> shorter links
          </h1>
          <p className="text-xl text-neutralGrayishViolet font-semibold py-4">
            Build your brand’s recognition and get detailed
            <br className="hidden lg:inline" />
            insights on how your links are performing.
          </p>
          <button className="bg-primaryCyan text-neutralWhite px-10 py-4 mt-6  rounded-full font-bold text-xl hover:bg-cyan-200">
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-slate-100 px-6 mt-20 md:mt-32 md:px-20 lg:px-40 text-center pb-10 grid gap-5">
        {/* Text Input */}

        <form
          className="bg-[url('images/bg-boost-mobile.svg')] md:bg-[url('images/bg-boost-desktop.svg')] bg-no-repeat bg-right bg-primaryCyanViolet md:mx-0 grid md:flex gap-6 rounded-lg overflow-hidden p-6 md:p-10 -translate-y-24 md:-translate-y-16 "
          onSubmit={(e) => dataFetcher(e)}
        >
          <input
            ref={inputRef}
            className="bg-neutralWhite px-4 py-3 rounded-lg flex-auto"
            type="url"
            placeholder="Shorten a link here..."
          />
          <button className="bg-primaryCyan text-neutralWhite py-3 rounded-lg font-bold text-xl md:w-1/4 hover:bg-cyan-200">
            Shorten It!
          </button>
        </form>

        {shortenedLinks.map((item, index) => {
          return <ShortenedLinks item={item} />;
        })}

        <h2 className="font-bold text-3xl">Advanced Statistics</h2>
        <p className="text-neutralGrayishViolet font-medium">
          Track how your links are performing across the web with
          <span className="lg:block">our advanced statistics dashboard.</span>
        </p>
        <ul className="mb-14 mt-20 grid gap-20 md:gap-8 md:grid xl:grid-cols-3">
          {statisticsInfo.map((item, index) => {
            return (
              <li
                key={index}
                className={`p-8 first-letter relative z-50 bg-neutralWhite rounded-md transition ${
                  index === 0 ? "lg:-translate-y-10" : ""
                }
                ${index === 2 ? "lg:translate-y-10" : ""}
                `}
              >
                <div className="bg-primaryCyanViolet p-5 w-20 rounded-full absolute top-0 left-1/2 xl:left-1/4 xl:-translate-x-1/2 -translate-x-1/2  -translate-y-1/2">
                  <img
                    src={require(`../images/icon-${item.img}.svg`)}
                    alt={`icon-${item.img}`}
                  />
                </div>
                <h3 className="font-bold text-2xl pt-10 pb-4">{item.title}</h3>
                <p className="text-neutralGrayishViolet font-medium">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-[url('images/bg-boost-mobile.svg')] md:bg-[url('images/bg-boost-desktop.svg')] bg-no-repeat bg-right  bg-primaryCyanViolet md:px-2 px-3 py-14 grid justify-center">
        <h2 className="font-bold text-3xl text-neutralWhite py-6">
          Boost your links today
        </h2>
        <button className="hover:bg-cyan-200 bg-primaryCyan text-neutralWhite px-10 py-3 rounded-full font-bold text-xl m-auto">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Main;
