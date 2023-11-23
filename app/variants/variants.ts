import { Variants } from "framer-motion";
import { DELAY } from "../data/costants";

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: DELAY,
    },
  },
};

export const elementVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 33,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
