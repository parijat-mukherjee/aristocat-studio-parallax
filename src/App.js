import React from "react";
import BackDrop from "./components/BackDrop";
import Office from "./components/Office";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import "./App.css";

export default function App() {
  return (
    <Parallax pages={4.6}>
      <div className="main-container">
        <BackDrop />

        <Office />
      </div>
    </Parallax>
  );
}
