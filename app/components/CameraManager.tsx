import { useFrame /*, useThree*/ } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
import { useCurrentSection } from "../data/atoms";
import {
  // CameraControls,
  ScrollControlsState,
  useScroll,
} from "@react-three/drei";
import { Vector3 } from "three";

export default function CameraManager() {
  const data = useScroll() as ScrollControlsState & {
    scroll: { current: number };
  };
  const [currentSection] = useCurrentSection();
  useFrame((state, delta) => {
    // console.log(data.scroll.current * data.pages);
    {
      switch (currentSection) {
        case 0:
          state.camera.position.x = 1 - data.scroll.current * data.pages;
          state.camera.position.y = 0 - data.scroll.current * data.pages;
          state.camera.position.z = 2;
          state.camera.lookAt(
            new Vector3(2, -2 - data.scroll.current * data.pages, 0)
          );
          break;
        case 1:
          if (state.camera.position.x !== 0) state.camera.position.x = 0;
          if (state.camera.position.y !== 0) state.camera.position.y = 0;
          state.camera.position.z = 7 - data.scroll.current * data.pages;
          state.camera.lookAt(new Vector3(0, 0, 0));
          break;
        case 2:
          state.camera.position.z = 8 - data.scroll.current * data.pages;
          break;
        default:
          state.camera.position.z = 5;
          break;
      }
    }
  });
  return <></>;
}
