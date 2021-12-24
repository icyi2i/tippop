import React from "react";
import TipPop from "../components/TipPop";

const CustomClasses = () => {
  return (
    <>
      <h4>Container styling</h4>

      <p className="mb-3">
        Tooltip trigger container can be customised by passing classes to TipPop
        component!
        <br />
        <strong>Note:</strong> Container is the target for inbuilt behaviors but
        padding also affects tooltip position!
      </p>

      <div className="d-flex">
        <TipPop
          className="p-2 mr-2 bg-info"
          tip={<p>Container background : blue</p>}
        >
          <div className="btn btn-light">B</div>
        </TipPop>

        <TipPop
          className="p-2 mr-2 bg-warning"
          tip={<p>Container background : Yellow</p>}
        >
          <div className="btn btn-light">Y</div>
        </TipPop>
      </div>
    </>
  );
};

export default CustomClasses;
