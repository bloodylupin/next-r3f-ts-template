import { ScrollControlsState, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useCurrentSection } from "../data/atoms";

export default function ScrollManager() {
  const data = useScroll() as ScrollControlsState & {
    scroll: { current: number };
  };

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");
  data.fixed.classList.add("children-right-0");

  const lastCurrentSectionRef = useRef<number>();
  const [_, setCurrentSection] = useCurrentSection();
  useFrame(() => {
    let currentSection = Math.floor(data.scroll.current * data.pages);
    if (currentSection === 5) currentSection = 4;
    if (currentSection !== lastCurrentSectionRef.current) {
      setCurrentSection(currentSection);
      lastCurrentSectionRef.current = currentSection;
    }
  });

  return <></>;
}
