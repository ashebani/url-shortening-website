import React, { useState } from "react";

const ShortenedLinks = ({ item }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className=" md:mx-0 grid md:flex md:justify-between md:items-center gap-4 bg-white rounded-lg overflow-hidden px-6 py-4  -translate-y-24 md:-translate-y-16 ">
      <p className=" text-left bg-neutralWhite font-semibold text-lg break">
        {" "}
        {item.link}
      </p>

      <hr className="md:hidden" />
      <p className="text-left md:text-right font-semibold text-lg text-ellipsis text-primaryCyan">
        {item.shortenedLink}
      </p>

      <button
        onClick={() => {
          navigator.clipboard.writeText(item.shortenedLink);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className={`bg-primaryCyan text-neutralWhite py-3 rounded-lg font-bold text-xl md:w-1/4 hover:bg-cyan-200 ${
          copied ? "bg-primaryCyanViolet" : ""
        } `}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default ShortenedLinks;

{
  /* Shortened Links */
}
