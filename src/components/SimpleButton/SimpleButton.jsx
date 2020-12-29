import React from "react";
import PropTypes from "prop-types";

function SimpleButton(props) {
  const sizeMap = {
    small: "p-1.5",
    normal: "p-2",
    large: "p-4",
  };

  const colorMap = {
    active: "bg-blue-400",
    activeHover: "bg-blue-600",
    destructive: "bg-red-600",
    destructiveHover: "bg-red-800",
  };

  return (
    <button
      className={`rounded-lg ${sizeMap[props.size]} ${
        colorMap[props.style]
      } shadow-xl hover:${colorMap[props.style + "Hover"]}`}
    >
      <div className="text-white font-bold text-center">{props.text}</div>
    </button>
  );
}

SimpleButton.defaultProps = {
  size: "normal",
  style: "active",
};

SimpleButton.propTypes = {
  /**
   * Text to render
   */
  text: PropTypes.string,
  /**
   * Size of text
   */
  size: PropTypes.oneOf(["small", "normal", "large"]),
  /**
   * Style of button
   */
  style: PropTypes.oneOf(["active", "destructive"]),
};

export default SimpleButton;
