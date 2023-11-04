"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Stage, OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <Stage adjustCamera={false}>
        <Experience />
      </Stage>
      <OrbitControls />
    </Canvas>
  );
}
