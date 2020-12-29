import React, { useState } from "react";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";
import "./Banner.css";

function Banner(props) {
  const [rendered, setRendered] = useState(true);

  const dismissBanner = () => {
    setRendered(false);
  };

  let renderedStyles = `flex max-w-full justify-between items-center shadow-lg`;
  renderedStyles += props.style === "error" ? " bg-red-400" : " bg-grey-300";
  renderedStyles += props.size === "narrow" ? " px-2 py-3" : " px-3 py-6";

  return (
    <div className={rendered ? renderedStyles : "banner-hidden"}>
      <p className="text-left pr-8">{props.text}</p>
      <div className="relative" onClick={dismissBanner}>
        <span className="absolute inset-y-0 right-0 top-0 flex items-center">
          <svg
            class={`w-6 h-6 stroke-current ${
              props.style !== "error" ? "text-red-600" : "text-black-600"
            } font-bold cursor-pointer`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

Banner.defaultProps = {
  style: "info",
  size: "narrow",
};

Banner.propTypes = {
  /**
   * Text to render inside the banner
   */
  text: PropTypes.string,

  /**
   * Style of button
   */
  style: PropTypes.oneOf(["info", "error"]),

  /**
   * Size of the banner
   */
  size: PropTypes.oneOf(["narrow", "wide"]),
};

export default Banner;
