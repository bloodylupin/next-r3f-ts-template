import { useCurrentSection, useIsMobile } from "@/app/data/atoms";
import { ACCENT, PRIMARY, SECONDARY } from "@/app/data/costants";
import { useThree } from "@react-three/fiber";

import { motion } from "framer-motion-3d";
import { DoubleSide } from "three";

export default function Cylinder() {
  const { viewport } = useThree();
  const [isMobile] = useIsMobile();
  const [currentSection] = useCurrentSection();
  return (
    <group position={[isMobile ? 0 : viewport.width / 8, 0, 3]}>
      {/* <directionalLight intensity={30} position={[0, 0, 0]} /> */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.75, 0.75, 2.5]} />
        <motion.meshPhongMaterial
          side={DoubleSide}
          initial={{ opacity: 0 }}
          animate={
            currentSection === 2
              ? {
                  opacity: 0.5,
                }
              : { opacity: 0, transition: { duration: 0 } }
          }
          transparent
          color={ACCENT}
        />
      </mesh>
    </group>
  );
}
