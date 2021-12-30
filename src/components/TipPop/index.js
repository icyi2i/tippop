import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./TipPop.scss";

/**
 * @param JSX tip - text or JSX to render in tooltip
 * @param bool show - flag to control toggling tooltip on custom behavior
 * @param string behavior - toggle behavior (onHover/onClick/custom)
 * @param string position - tooltip position (auto/top/bottom/left/right)
 * @param number (int) autoPositionBuffer - number of pixels to consider
 * while positioning in auto position
 * @param bool disablePointer - flag to disable arrow towards the target
 * @param string className - custom classes for trigger container
 */
const TipPop = (props) => {
  const {
    tip = "",
    show = false,
    behavior = "onHover",
    position = "auto",
    autoPositionBuffer = 16,
    disablePointer = false,
    className = "",
  } = props;

  const tipContainerRef = useRef(null);

  const [showTip, setShowTip] = useState(show);

  const toggleShowTip = (e) => {
    e.stopPropagation();
    setShowTip(!showTip);
  };

  const tipPopContainerEventProps = {
    onMouseEnter: behavior === "onHover" ? toggleShowTip : undefined,
    onMouseLeave: behavior === "onHover" ? toggleShowTip : undefined,
    onClick: behavior === "onClick" ? toggleShowTip : undefined,
  };

  // Tooltip container position
  const tcp = tipContainerRef.current
    ? tipContainerRef.current.getBoundingClientRect()
    : null;

  // Constants for positioning of tooltip
  const minTipHeight = 42;
  const tooltipMargin = 8;

  // Decide tooltip position based on window size and container position
  const tipPosition =
    position === "auto" && tcp
      ? window.innerHeight - (tcp.y + tcp.height) <
        minTipHeight + autoPositionBuffer
        ? "top"
        : "bottom"
      : position;

  const tipStyle = {
    top:
      tipPosition === "bottom" && tcp
        ? tcp.height + tooltipMargin
        : ["left", "right"].includes(tipPosition)
        ? 0
        : "",
    bottom: tipPosition === "top" && tcp ? tcp.height + tooltipMargin : "",
    right: tipPosition === "left" && tcp ? tcp.width + tooltipMargin : "",
    left: tipPosition === "right" && tcp ? tcp.width + tooltipMargin : "",
    width: "max-content",
    maxWidth: tcp
      ? tipPosition === "left"
        ? tcp.left - 16 // Left
        : tipPosition === "right"
        ? window.innerWidth - tcp.right - 32 // Right
        : window.innerWidth - tcp.left - 24 // Top and bottom
      : "auto",
    flex: 1,
  };

  return (
    <div
      ref={tipContainerRef}
      className={`tippop-container ${className.toString()}`}
      {...tipPopContainerEventProps}
    >
      {props.children}
      {(behavior === "custom" ? show : showTip) && (
        <div
          className={`tippop position-${tipPosition} ${
            disablePointer ? "no-pointer" : ""
          }`}
          style={tipStyle}
        >
          {React.isValidElement(tip) ? tip : <span>{tip}</span>}
        </div>
      )}
    </div>
  );
};

TipPop.propTypes = {
  tip: PropTypes.node,
  show: PropTypes.bool,
  behavior: PropTypes.oneOf(["onHover", "onClick", "custom"]),
  position: PropTypes.oneOf(["auto", "top", "bottom", "left", "right"]),
  disablePointer: PropTypes.bool,
  autoPositionBuffer: PropTypes.number,
};

export default TipPop;
