"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import {
  Stage,
  CameraControls,
  Scroll,
  ScrollControls,
  OrbitControls,
} from "@react-three/drei";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Showcase from "../sections/Showcase";
import ScrollManager from "../ScrollManager";
import CameraManager from "../CameraManager";
import IsMobileManager from "../IsMobileManager";
import { Perf } from "r3f-perf";

export default function Scene() {
  const SECTIONS = [
    { name: "Hero", component: <Hero /> },
    { name: "Intro", component: <Intro /> },
    { name: "Skills", component: <Skills /> },
    { name: "Showcase", component: <Showcase /> },
    { name: "Contact", component: <Contact /> },
  ];
  return (
    <Canvas shadows>
      <ambientLight />
      <directionalLight position={[0, 2, 0]} intensity={2} castShadow />
      <Perf position="top-left" />
      <ScrollControls pages={5}>
        <Experience />
        <Scroll html>
          {SECTIONS.map((section) => (
            <section
              className="h-[100dvh] grid prose mx-auto p-4"
              key={section.name}
            >
              {section.component}
            </section>
          ))}
        </Scroll>
        <ScrollManager />
        <CameraManager />
      </ScrollControls>
      <IsMobileManager />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
