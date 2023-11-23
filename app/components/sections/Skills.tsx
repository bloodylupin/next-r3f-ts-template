import { containerVariants, elementVariants } from "@/app/variants/variants";
import { motion, Variants } from "framer-motion";
import { DELAY } from "@/app/data/costants";

export default function Skills() {
  const SKILLS = [
    {
      name: "Typescript",
      value: 90,
    },
    {
      name: "React",
      value: 90,
    },
    { name: "Next", value: 80 },
    {
      name: "React Three Fiber",
      value: 80,
    },
    {
      name: "Framer Motion",
      value: 80,
    },
    {
      name: "Node",
      value: 70,
    },
    {
      name: "Mongo DB",
      value: 70,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="h-full"
    >
      <motion.h2 variants={elementVariants}>Skills</motion.h2>
      <ul className="pl-0">
        {SKILLS.map((skill, index) => (
          <motion.li
            key={skill.name}
            variants={elementVariants}
            className="list-none pl-0 lg:max-w-sm"
          >
            {skill.name}
            <div className="relative bg-secondary rounded-full">
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{
                  width: `${skill.value}%`,
                  transition: { delay: DELAY + index * DELAY },
                }}
                className="bg-accent h-4 block rounded-full"
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
