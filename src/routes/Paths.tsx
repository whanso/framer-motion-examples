import { motion } from "framer-motion";
import { Checkbox } from "../components/Checkbox";
import PathsMdx from "../components/mdx/Paths.mdx";
import FramerMotionLogo from "../components/icons/Logo";
import { components } from "../utilities/config";
export default function Paths() {
  return (
    <div>
      <div className="flex justify-center">
        <FramerMotionLogo />
      </div>
      <h1 className="text-center">SVG Paths</h1>
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <PathsMdx components={components} />
        <Checkbox />
      </motion.div>
    </div>
  );
}
