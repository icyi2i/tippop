import React, { useState } from "react";
import TipPop from "../components/TipPop";

const CustomBehavior = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h4>Custom trigger behavior</h4>

      <p className="mb-3">
        A tooltip can be toggled with&nbsp;
        <em>custom</em> behavior and <em>show</em> flag!
      </p>

      <TipPop tip="A tip to be shown" show={show} behavior="custom">
        <button
          className="btn btn-outline-dark"
          onDoubleClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
        >
          Double click to toggle tip
        </button>
      </TipPop>
    </>
  );
};

export default CustomBehavior;
