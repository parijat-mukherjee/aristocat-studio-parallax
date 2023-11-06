import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

import building from "../images/layers/building-main.png";

export default function MainBuilding() {
  return (
    <ParallaxLayer offset={0} speed={0.5} factor={5} className="office">
      <img className="building-image" src={building} alt="main-building" />
    </ParallaxLayer>
  );
}
