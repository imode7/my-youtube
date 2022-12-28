import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { FaYoutube } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GiPlagueDoctorProfile } from "react-icons/gi";

export default function Header() {
  const { toggleDarkMode } = useDarkMode();
  return (
    <header className="flex w-full h-20 items-center justify-between px-10">
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className="text-3xl text-red-600 dark:text-white mr-2"
        >
          <FaYoutube />
        </button>
        <span>HoonTube</span>
      </div>
      <div className="flex items-center h-10">
        <input type="text" className="w-96 h-full p-5" />
        <button className="flex justify-center items-center h-full w-10 bg-amber-200">
          <BsSearch />
        </button>
      </div>
      <GiPlagueDoctorProfile
        className="hover:cursor-pointer"
        onClick={() => console.log("ck")}
      />
    </header>
  );
}
