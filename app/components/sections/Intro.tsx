import { containerVariants, elementVariants } from "@/app/variants/variants";
import { motion } from "framer-motion";

export default function Intro() {
  const STEPS = [
    { year: 2016, event: "Laurea Magistrale in Giurisprudenza" },
    { year: 2018, event: "Web Designer Freelance" },
    { year: 2019, event: "Front-End Developer Freelance" },
    { year: 2021, event: "Typescript Developer Freelance" },
  ];
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="bg-base-100 bg-opacity-50 p-4 rounded flex flex-col justify-center m-auto"
    >
      <motion.h2 variants={elementVariants}>Curriculum Vitae</motion.h2>
      <ul className="timeline timeline-vertical pl-0">
        {STEPS.map((step) => (
          <li
            key={step.event}
            className="grid-cols-[auto,auto,1fr] grid-rows-1 pl-0"
          >
            <motion.div variants={elementVariants} className="timeline-start">
              {step.year}
            </motion.div>
            <motion.div
              variants={elementVariants}
              className="timeline-middle col-start-2 row-start-1 mx-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
            <motion.div
              variants={elementVariants}
              className="timeline-end timeline-box"
            >
              {step.event}
            </motion.div>
            {/* <motion.hr
              variants={elementVariants}
              style={{ height: "1rem", marginTop: "0.5rem" }}
            /> */}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
