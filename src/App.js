import React from "react";

import InbuiltBehavior from "./examples/InbuiltBehavior";
import CustomContent from "./examples/CustomContent";
import CustomClasses from "./examples/CustomClasses";
import CustomBehavior from "./examples/CustomBehavior";
import TipPostion from "./examples/TipPosition";

import gh from "./resources/gh.png";
import npm from "./resources/npm.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  const examples = [
    InbuiltBehavior,
    CustomContent,
    TipPostion,
    CustomClasses,
    CustomBehavior,
  ];

  return (
    <div id="tippop-app" className="bg-light p-5">
      <h1 className="display-4">TipPop</h1>
      <p className="lead">A minimal react tooltip component</p>

      {examples.map((Example, index) => (
        <div className="p-3 my-3 border border-dark" key={index}>
          <Example />
        </div>
      ))}

      <div className="border-top border-dark p-2">
        <h5>Author</h5>
        <p className="mb-3">
          <a className="text-dark" href="http://sarthakgambhir.herokuapp.com/">
            <strong>icyi2i (Sarthak Gambhir)</strong>
          </a>
        </p>

        <h5>Links</h5>

        <a className="text-dark" href="https://github.com/icyi2i/tippop">
          <img className="link-icon gh" src={gh} alt="github" />
        </a>
        <a className="text-dark" href="https://www.npmjs.com/package/tippop">
          <img className="link-icon npm" src={npm} alt="npmjs" />
        </a>
      </div>
    </div>
  );
};

export default App;
