import React from "react";
import TipPop from "../components/TipPop";

const TipPostion = () => {
  return (
    <>
      <h4>Tooltip Postion</h4>

      <p className="mb-3">
        A tooltip can be positioned in 4 directions&nbsp;
        <em>'top'</em>, <em>'bottom'</em>, <em>'left'</em>, and <em>'right'</em>
        . The special&nbsp;
        <strong>auto</strong> position switches between top and bottom based on
        height and position of trigger container.
      </p>

      <div className="d-flex flex-wrap">
        <div className="mr-auto">
          <TipPop
            tip="A tip always on right!"
            position="right"
            behavior="onHover"
          >
            <button className="btn btn-outline-dark">Right</button>
          </TipPop>
        </div>
        <div className="d-flex flex-wrap">
          <TipPop
            className="mr-2 mb-2"
            tip="A tip always on top!"
            position="top"
            behavior="onHover"
          >
            <button className="btn btn-outline-dark">Top</button>
          </TipPop>
          <TipPop
            className="mr-2 mb-2"
            tip="A tip always on bottom!"
            position="bottom"
            behavior="onHover"
          >
            <button className="btn btn-outline-dark">Bottom</button>
          </TipPop>

          <TipPop
            className="mr-2 mb-2"
            tip="A tip positioned bottom or top based on space availability!"
            position="auto"
            behavior="onHover"
          >
            <button className="btn btn-outline-dark">Auto</button>
          </TipPop>
        </div>
        <div className="ml-auto">
          <TipPop
            tip="A tip always on left!"
            position="left"
            behavior="onHover"
          >
            <button className="btn btn-outline-dark">Left</button>
          </TipPop>
        </div>
      </div>
    </>
  );
};

export default TipPostion;
