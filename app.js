import React from "react";
import ReactDOM from "react-dom/client";

let element = React.createElement(
  "h2",
  { style: { color: "red", background: "yellow" } },
  "In App"
);
let x = ReactDOM.createRoot(document.getElementById("root"));
x.render(element);
