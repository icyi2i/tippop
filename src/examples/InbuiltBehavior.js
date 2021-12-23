import React from "react";
import TipPop from "../components/TipPop";

const InbuiltBehavior = () => {
  return (
    <>
      <h4>Tip behaviors</h4>

      <p className="mb-3">
        Inbuilt behaviors allow basic toggling of tooltips on hover and click.
      </p>

      <div className="d-flex">
        <TipPop
          className="mr-2"
          tip={<p>Tip toggled on hover</p>}
          behavior="onHover"
        >
          <div className="btn btn-outline-dark">Hover!</div>
        </TipPop>

        <TipPop
          className="mr-2"
          tip={<p>Tip toggled on click</p>}
          behavior="onClick"
        >
          <div className="btn btn-outline-dark">Click!</div>
        </TipPop>
      </div>
    </>
  );
};

export default InbuiltBehavior;
