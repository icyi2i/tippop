import React from "react";
import TipPop from "../components/TipPop";
import "./TipStyling.scss";

const TipStyling = () => {
  return (
    <>
      <h4>Customizing tooltip style</h4>

      <p className="mb-3">
        Tooltip style/theme can be customized by using/overriding rules for
        <em>"tippop"</em> class for the tooltip and the <em>"::before"</em>{" "}
        psuedo element for the pointer
      </p>

      <div className="d-flex">
        <TipPop className="tip-danger mr-2" tip={<p>Custom styling! 😉</p>}>
          <div className="btn btn-dark">Dangerous tip</div>
        </TipPop>

        <TipPop className="tip-success mr-2" tip={<p>Custom styling! 😉</p>}>
          <div className="btn btn-dark">Successful tip</div>
        </TipPop>
      </div>
    </>
  );
};

export default TipStyling;
