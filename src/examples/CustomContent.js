import React from "react";
import TipPop from "../components/TipPop";

const CustomContent = () => {
  return (
    <>
      <h4>Custom tip content</h4>

      <p className="mb-3">
        Content can be customized!!! JSX can be included too...
      </p>

      <TipPop
        tip={
          <p>
            The tooltip content can be anything renderable, even&nbsp;
            <em>custom</em>&nbsp;<strong>JSX</strong> 😁
          </p>
        }
      >
        <div className="btn btn-outline-dark">Hover over me!</div>
      </TipPop>
    </>
  );
};

export default CustomContent;
