import { motion } from "framer-motion";
import FramerMotionLogo from "../components/icons/Logo";
import LayoutMdx from "../components/mdx/Layout.mdx";
import { components } from "../utilities/config";

export default function Layout() {
  return (
    <div>
      <div className="flex justify-center">
        <FramerMotionLogo />
      </div>
      <h1 className="text-center">Layout Transitions</h1>
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <LayoutMdx components={components} />
      </motion.div>
    </div>
  );
}
