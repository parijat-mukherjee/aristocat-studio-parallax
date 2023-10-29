import React from "react";
import spray_painter from "../images/layers/spray-painter.png";
import disc_jockey from "../images/layers/disc-jockey.png";
import social_button from "../images/layers/social-button.png";
import spider_bot from "../images/layers/spider-bot.png";
import aristocat_sign from "../images/layers/aristocat-sign.png";
import meet_the_team from "../images/layers/meet-the-team.png";

export default function Ground() {
  return (
    <div className="ground">
      <div className="sign">
        <img className="sign-image" src={aristocat_sign} alt="aristocat-sign" />
      </div>
      <div className="spray-painter">
        <img
          className="spray-painter-image"
          src={spray_painter}
          alt="spray-painter"
        />
      </div>
      <div className="disc-jockey">
        <img
          className="disc-jockey-image"
          src={disc_jockey}
          alt="disc-jockey"
        />
      </div>
    </div>
  );
}
