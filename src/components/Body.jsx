import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Body(props) {
  const {
    isLoading,
    error,
    data: youtubePopular,
  } = useQuery(["youtubePopular"], async () =>
    fetch(`videos/search.json`).then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="flex p-5 flex-wrap justify-center">
      {youtubePopular.items.map((youtubeList, idx) => {
        return (
          <div
            key={idx}
            className="border-solid border-2 border-indigo-600 max-w-1/4 min-w-1/4 m-2.5 flex flex-col"
          >
            <Link to={`details`} className="flex flex-col">
              <img src={youtubeList.snippet.thumbnails.default.url} alt="" />
              <p>{textSplit(youtubeList.snippet.title)}</p>
              <p className="text-xs text-gray-400">
                {youtubeList.snippet.channelTitle}
              </p>
              <p className="text-xs text-gray-400">
                {dayChanger(youtubeList.snippet.publishedAt)}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

function textSplit(text) {
  if (text.length > 30) {
    return text.slice(0, 30).concat("...");
  } else {
    return text;
  }
}

function dayChanger(days) {
  const formatter = new Intl.RelativeTimeFormat("en");
  const daysPassed = Math.ceil(
    (new Date(days) - new Date()) / (1000 * 60 * 60 * 24)
  );
  return formatter.format(daysPassed, "day");
}
