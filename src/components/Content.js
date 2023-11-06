import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import content from "../images/layers/content.png";

export default function Content() {
  return (
    <ParallaxLayer offset={1} speed={0.5} factor={0.5} className="content">
      <img className="content-image" src={content} alt="content" />
    </ParallaxLayer>
  );
}
