import React from "react";
import "./App.css";
import BackDrop from "./components/BackDrop";
import { Parallax } from "@react-spring/parallax";
import MainBuilding from "./components/MainBuilding";
import Roof from "./components/Roof";
import Illustration from "./components/Illustration";
import Animation from "./components/Animation";
import Content from "./components/Content";
import WebDev from "./components/WebDev";
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <Parallax className="main-container" pages={3.41}>
      <BackDrop />

      <MainBuilding />

      <Roof />

      <Illustration />

      <Animation />

      <Content />

      <WebDev />

      <Testimonial />
    </Parallax>
  );
}
