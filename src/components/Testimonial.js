import React from "react";
import testimonial from "../images/layers/testimonial.png";
import { ParallaxLayer } from "@react-spring/parallax";

export default function Testimonial() {
  return (
    <ParallaxLayer offset={1} speed={0.5} factor={0.5} className="testimonial">
      <img className="testimonial-image" src={testimonial} alt="roof" />
      <div className="testimonial-box">
        <p className="testimonial-text">My Testimonial</p>
        <p className="testimonial-name">Parijat Mukherjee, Aristocat Studio</p>
      </div>
    </ParallaxLayer>
  );
}
