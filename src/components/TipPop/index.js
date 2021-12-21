import React from "react";

const TipPop = ({
  show = false,
  tip = "",
  position = "auto",
  disablePointer = false,
}) => {
  return <>{show && <div className="position-{position}">{tip}</div>}</>;
};

export default TipPop;
