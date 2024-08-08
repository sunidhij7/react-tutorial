import React from "react";
import "./Icon.css";

function Icon({ iconData }) {
  return (
    <>
      <svg
        className="icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={iconData}></path>
      </svg>
    </>
  );
}

export default Icon;
