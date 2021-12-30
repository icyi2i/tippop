import React from "react";
import TipPop from "../components/TipPop";

const DisablePointer = () => {
  return (
    <>
      <h4>Disabling tooltip pointer</h4>

      <p className="mb-3">
        Tooltip pointer can be disabled using <em>disablePointer</em> flag prop.
      </p>

      <div className="d-flex">
        <TipPop disablePointer={true} tip={<p>No pointer! 🥺</p>}>
          <div className="btn btn-dark">Hover 😋</div>
        </TipPop>
      </div>
    </>
  );
};

export default DisablePointer;
