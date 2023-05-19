import { motion } from "framer-motion";
import FramerMotionLogo from "../components/icons/Logo";
import Intro from "../components/mdx/Intro.mdx";
import { components } from "../utilities/config";

export default function Framer() {
  return (
    <div>
      <div className="flex justify-center">
        <FramerMotionLogo />
      </div>
      <h1 className="text-center">Animations with Framer Motion</h1>
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Intro components={components} />
      </motion.div>
    </div>
  );
}
