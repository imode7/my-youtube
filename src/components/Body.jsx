import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Body(props) {
  const {
    isLoading,
    error,
    data: youtubePopular,
  } = useQuery(["youtubePopular"], async () =>
    fetch(`videos/popular.json`).then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="flex p-5 flex-wrap justify-center">
      {youtubePopular.items.map((youtubeList) => {
        return (
          <div
            key={youtubeList.id}
            className="border-solid border-2 border-indigo-600 max-w-1/4 min-w-1/4 m-2.5 flex justify-center flex-col"
          >
            <img src={youtubeList.snippet.thumbnails.default.url} alt="" />
            <p>{textSplit(youtubeList.snippet.title)}</p>
            <p className="text-xs text-gray-400">
              {youtubeList.snippet.channelTitle}
              {`조회수`}
            </p>
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
