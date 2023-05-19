import { Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

export default function Circle() {
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.start("hidden");
    await controls.start("visible");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-black py-1 px-3 text-sm rounded border border-gray-700"
      >
        Start / Restart
      </button>
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial="hidden"
        animate={controls}
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#ff0055"
          strokeWidth={5}
          variants={draw}
          fill="transparent"
        />
      </motion.svg>
    </div>
  );
}
