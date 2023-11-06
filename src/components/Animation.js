import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import animation from "../images/layers/animation.png";

export default function Animation() {
  return (
    <ParallaxLayer offset={1} speed={0.5} factor={0.5} className="animation">
      <img className="animation-image" src={animation} alt="animation" />
    </ParallaxLayer>
  );
}
