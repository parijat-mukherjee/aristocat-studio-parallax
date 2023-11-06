import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import roof from "../images/layers/roof.png";

export default function Roof() {
  return (
    <ParallaxLayer offset={1} speed={0.5} factor={0.5} className="roof">
      <img className="roof-image" src={roof} alt="roof" />
    </ParallaxLayer>
  );
}
