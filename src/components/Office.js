import React from "react";
import MainBuilding from "./MainBuilding";
import Roof from "./Roof";
import Illustration from "./Illustration";
import Animation from "./Animation";
import Content from "./Content";
import WebDev from "./WebDev";
import Testimonial from "./Testimonial";
import Ground from "./Ground";

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
      <Ground />
    </div>
  );
}
