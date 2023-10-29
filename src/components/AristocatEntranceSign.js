import React from "react";
import aristocat_sign from "../images/layers/aristocat-sign.png";

export default function AristocatEntranceSign() {
  return (
    <div className="aristocat-sign">
      <img
        className="aristocat-sign-image"
        src={aristocat_sign}
        alt="aristocat-sign"
      />
    </div>
  );
}
