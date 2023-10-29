import React from "react";
import BackDrop from "./components/BackDrop";
import Office from "./components/Office";
import Ground from "./components/Ground";

import "./App.css";

export default function App() {
  return (
    <div className="main-container">
      {/* <BackDrop />
      <Office /> */}
      <Ground />
    </div>
  );
}
