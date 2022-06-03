import React from "react";

function Header() {
  return (
    <nav className="flex items-center w-full justify-between flex-wrap bg-white pt-3 text-sm -mx-6 mt-4 px-6">
      <a href="/">
        <div className="flex items-center flex-shrink-0 text-gray-900 ml-12 ">
          <svg
            className="fill-current h-8 w-8 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 109.2 109.2"
            xmlSpace="preserve"
          >
            <style>{`.st1{fill:none;stroke:#fff;stroke-width:4.5432;stroke-linecap:round;stroke-miterlimit:10}`}</style>
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="85.135"
              y1="543.468"
              x2="36.417"
              y2="469.52"
              gradientTransform="translate(0 -442.52)"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset=".002" stopColor="#52c4c9" />
              <stop offset="1" stopColor="#27a6de" />
            </linearGradient>
            <circle cx="54.6" cy="54.6" r="54.6" fill="url(#SVGID_1_)" />
            <path
              className="st1"
              d="M24.7 34.6l29.9 21.9M36.8 27.3l-12.1 7.3v16.1M84.6 34.6l-30 21.9v37.3"
            />
            <path
              className="st1"
              d="M72.4 27.3l12.2 7.3v16.1M41.9 82.4l12.7 12.5 12.8-12.5"
            />
          </svg>
          <span className="font-bold text-3xl">Freight</span>
          <span className="text-3xl">hub</span>
        </div>
      </a>
    </nav>
  );
}

export default Header;
