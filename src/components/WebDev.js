import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import webdev from "../images/layers/webdev.png";

export default function WebDev() {
  return (
    <ParallaxLayer offset={1} speed={0.5} factor={0.5} className="webdev">
      <img className="webdev-image" src={webdev} alt="webdev" />
    </ParallaxLayer>
  );
}
