import React from "react";
import testimonial from "../images/layers/testimonial.png";

export default function Testimonial() {
  return (
    <div className="testimonial building-common">
      <img className="testimonial-image" src={testimonial} alt="roof" />
      <div className="testimonial-box">
        <p className="testimonial-text">My Testimonial</p>
        <p className="testimonial-name">Parijat Mukherjee, Aristocat Studio</p>
      </div>
    </div>
  );
}
