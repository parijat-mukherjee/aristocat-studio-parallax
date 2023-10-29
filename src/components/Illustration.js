import React from "react";
import illustration from "../images/layers/illustration.png";

export default function Illustration() {
  return (
    <div className="illustration building-common">
      <img
        className="illustration-image"
        src={illustration}
        alt="webdev floor"
      />
    </div>
  );
}
