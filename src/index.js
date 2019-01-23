import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Accordion } from "./Accordion";
import { Posts } from "./Posts";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Accordion title="Example">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita sunt
        dolorem vel blanditiis ipsum suscipit officia sed iure eligendi ducimus
        nostrum, non architecto consequatur! Voluptatum ipsa repellendus et
        dignissimos neque.
      </Accordion>
      <Posts />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
