import React from "react";
import Header from "./Header";

function Details(props) {
  return (
    <div className="w-3/5 overflow-hidden">
      <Header />
      {/* detail 안에 플레이리스트, 옆에 사이드메뉴로 나뉘는 div*/}
      <div className="w-3/5 h-full">
        {/*화면 보이는 div*/}
        <div className="bg-amber-100">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/OTWYsXF99iY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="p-5">
            <p>title</p>
          </div>
        </div>
        {/*플레이리스트 div*/}
        <div></div>
      </div>
    </div>
  );
}

export default Details;
