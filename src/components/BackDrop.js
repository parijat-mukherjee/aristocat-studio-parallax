import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import cloud from "../images/layers/cloud.png";
import silhouette from "../images/layers/silhouette.png";
import building_one from "../images/layers/building-one.png";
import building_two from "../images/layers/building-two.png";
import building_three from "../images/layers/building-three.png";

export default function BackDrop() {
  return (
    <div>
      <ParallaxLayer
        offset={0}
        speed={0.03}
        factor={5}
        style={{
          backgroundImage: `url(${cloud})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      ></ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.05}
        factor={5}
        style={{
          backgroundImage: `url(${silhouette})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      ></ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.1}
        factor={3}
        style={{
          backgroundImage: `url(${building_one})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      ></ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.2}
        factor={5}
        style={{
          backgroundImage: `url(${building_two})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      ></ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.23}
        factor={5}
        style={{
          backgroundImage: `url(${building_three})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      ></ParallaxLayer>
    </div>
  );
}
