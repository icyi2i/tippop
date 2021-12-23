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
- Styling: Custom classes allow you to customize how trigger container looks
  like.

Check out the examples directory for customization usage!

## Links

- [Author: Sarthak Gambhir](http://sarthakgambhir.herokuapp.com/)
- [Github repo](https://github.com/icyi2i/tippop)
- [NPM package](https://www.npmjs.com/package/tippop)
