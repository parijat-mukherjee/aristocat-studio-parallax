import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import illustration from "../images/layers/illustration.png";

export default function Illustration() {
  return (
    <ParallaxLayer offset={1} speed={0.5} factor={0.5} className="illustration">
      <img
        className="illustration-image"
        src={illustration}
        alt="illustration"
      />
    </ParallaxLayer>
  );
}
