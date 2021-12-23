import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TipPop.scss";

/**
 * @param JSX tip - text or JSX to render in tooltip
 * @param bool show - flag to control toggling tooltip on custom behavior
 * @param bool disablePointer - flag to disable arrow towards the target
 * @param string behavior - toggle behavior (onHover/onClick/custom)
 * @param string position - tooltip position (auto/top/bottom/left/right)
 * @param string className - custom classes for trigger container
 */
const TipPop = (props) => {
  const {
    tip = "",
    show = false,
    behavior = "onHover",
    position = "auto",
    disablePointer = false,
    className = "",
  } = props;

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

  return (
    <div
      className={`tippop-container ${className.toString()}`}
      {...tipPopContainerEventProps}
    >
      {props.children}
      {(behavior === "custom" ? show : showTip) && (
        <div
          className={`tippop position-${position} ${
            disablePointer ? "no-pointer" : ""
          }`}
        >
          {tip}
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
};

export default TipPop;
