import { useFrame, useThree } from "@react-three/fiber";
import { DoubleSide } from "three";

import { motion } from "framer-motion-3d";
import { useCurrentSection } from "@/app/data/atoms";
import { useRef } from "react";
import { ACCENT, PRIMARY, SECONDARY } from "@/app/data/costants";

export default function Cone() {
  const { viewport } = useThree();
  const [currentSection] = useCurrentSection();
  const coneRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (currentSection === 1 && coneRef.current) {
      coneRef.current.rotation.y -= delta / 7;
    }
  });

  return (
    <motion.group
      initial={{ scale: 0 }}
      animate={
        currentSection === 1
          ? {
              scale: 1,
              transition: {
                duration: 0.7,
              },
            }
          : { scale: 0 }
      }
      position={[0, 0, 5]}
      rotation-x={-Math.PI / 2}
    >
      <group ref={coneRef}>
        <mesh>
          <coneGeometry args={[2, 100, 100]} />
          <meshStandardMaterial side={DoubleSide} wireframe color={PRIMARY} />
        </mesh>
      </group>
    </motion.group>
  );
}
