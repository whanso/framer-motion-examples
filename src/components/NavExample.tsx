import { Variants, motion } from "framer-motion";
import { useState } from "react";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function NavExample() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className="w-[300px] text-indigo-600"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.button
        className="w-full bg-white mb-[10px] px-[20px] text-lg font-bold py-[10px] flex justify-between items-center rounded-xl"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className="flex flex-col gap-[10px] bg-white color p-3 list-none m-0"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li className="p-3" variants={itemVariants}>
          Item 1
        </motion.li>
        <motion.li className="p-3" variants={itemVariants}>
          Item 2
        </motion.li>
        <motion.li className="p-3" variants={itemVariants}>
          Item 3
        </motion.li>
        <motion.li className="p-3" variants={itemVariants}>
          Item 4
        </motion.li>
        <motion.li className="p-3" variants={itemVariants}>
          Item 5
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
