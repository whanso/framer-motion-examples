/* eslint-disable @typescript-eslint/no-explicit-any */
import { Variants, motion } from "framer-motion";

const repeatDelay = 30;
const delay = 1;

const item: Variants = {
  show: {
    scale: [1, 0.6, 0.6, 0.6, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatDelay,
      delay,
      ease: "backInOut",
    },
  },
  shake: {
    rotate: [0, 0, 0, 30, -10, 10, -10, 0, 0, 0, 0, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay,
      repeatDelay,
      ease: "easeInOut",
    },
  },
};

const FramerMotionLogo = (props: any) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="3.7 3.7 43.6 43.6"
    height={80}
    width={80}
    animate={["show", "shake"]}
    variants={item}
    {...props}
  >
    <path
      fill="#59529d"
      d="M47.3 3.7v21.8L36.4 36.4 25.5 47.3 14.6 36.4l10.9-10.9v.1-.1z"
    />
    <path fill="#5271b4" d="M47.3 25.5v21.8L36.4 36.4z" />
    <path fill="#bb4b96" d="M25.5 25.5 14.6 36.4 3.7 47.3V3.7l10.9 10.9z" />
  </motion.svg>
);
export default FramerMotionLogo;
