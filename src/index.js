import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function handleAction(event) {
  console.log("Child did ", event);
}

function Parent() {
  return (
    <div>
      <Child onAction={handleAction("Something")} />
    </div>
  );
}

function Child({ onAction }) {
  return <button onClick={onAction}> Press Me to Pass Data </button>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Parent />, rootElement);
