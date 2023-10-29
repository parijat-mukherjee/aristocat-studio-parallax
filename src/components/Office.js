import React from "react";
import MainBuilding from "./MainBuilding";
import Roof from "./Roof";
import Illustration from "./Illustration";
import Animation from "./Animation";
import Content from "./Content";
import WebDev from "./WebDev";
import Testimonial from "./Testimonial";
import SprayPainter from "./SprayPainter";
import DiscJockey from "./DiscJockey";
import AristocatEntranceSign from "./AristocatEntranceSign";
import Social from "./Social";
import Team from "./Team";
import SpiderBot from "./SpiderBot";
import GreenBot from "./GreenBot";

export default function Office() {
  return (
    <div className="office">
      <MainBuilding />
      <Roof />
      <Illustration />
      <Animation />
      <Content />
      <WebDev />
      <Testimonial />
      <SprayPainter />
      <DiscJockey />
      <AristocatEntranceSign />
      <Social />
      <Team />
      <SpiderBot />
      <GreenBot />
    </div>
  );
}
