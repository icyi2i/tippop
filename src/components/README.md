# TipPop

A minimal react tooltip component!

## Demo

[TipPop demo](https://icyi2i.github.io/tippop/)

## Installation

- Using npm

  ```bash
  npm install tippop
  ```

- Using yarn

  ```bash
  yarn add tippop
  ```

## Usage

TipPop is used as a HOC. The trigger elements/components can be passed as
children to TipPop component

### Basic

A simple tooltip defaults the trigger on hover.

```JSX
import React from "react";
import TipPop from "../components/TipPop";

const YourComponent = () => {
  return (
    <>
      <TipPop tip="A custom tooltip">
        <button>Hover over me!</button>
      </TipPop>
    </>
  );
};

export default YourComponent;
```

### Customization

Customization is possible in the following areas:

- Content: Tooltip content can be anything renderable, even custom JSX.
- Behavior: Along with inbuilt behaviors of `onClick` and `onHover`, a `show`
  flag can be used along with `custom` behavior to override with toggle state
  maintained by you
- Position: The `position` prop allows you to decide the position of the tooltip
  with respect to the container. Supported positions are:
  - left
  - right
  - top
  - bottom
  - auto - switches between bottom and top based on space available. The
    `autoPositionBuffer` prop allows you to define the height at which position
    is switched in auto mode.
- Styling: Custom classes allow you to customize how trigger container looks
  like. Theming is also possible for tooltips, see example
  (src/examples/TipStyling.js) in repo.
- You can also disable the pointer using the `disablePointer` flag.

Check out the examples directory for customization usage!

## Links

- [Author: Sarthak Gambhir](http://sarthakgambhir.herokuapp.com/)
- [Github repo](https://github.com/icyi2i/tippop)
- [NPM package](https://www.npmjs.com/package/tippop)
