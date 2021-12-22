import React, { useState } from "react";
import TipPop from "./components/TipPop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="jumbotron">
      <h1>TipPop</h1>

      <div className="my-5">
        <p className="mb-3">
          A tooltip can be mapped to components with custom handler for toggling
          tooltips!
        </p>
        <TipPop tip="A tip to be shown" show={show} behavior="custom">
          <button
            className="btn btn-outline-dark"
            onClick={(e) => {
              e.stopPropagation();
              setShow(!show);
            }}
          >
            Toggle Tip
          </button>
        </TipPop>
      </div>

      <div className="my-5">
        <p className="mb-3">
          Inbuilt behaviors allow basic toggling of tooltips on hover and click.
        </p>

        <TipPop
          tip={
            <p>
              The tooltip content can be anything renderable, even{" "}
              <em>custom</em> <strong>JSX</strong>
            </p>
          }
          behavior="onHover"
          position="left"
        >
          <div className="bg-light square-block">
            <span>
              Hover
              <br />
              over
              <br />
              me!
            </span>
          </div>
        </TipPop>
      </div>
    </div>
  );
};

export default App;
