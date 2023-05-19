/* eslint-disable no-constant-condition */
import { NavLink, useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const links = [
  {
    to: "setup",
    label: "Setup",
  },
  {
    to: "paths",
    label: "SVG Paths",
  },
  {
    to: "layout",
    label: "Layout Transitions",
  },
];

const item: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, y: { duration: 0.5 }, delay: i * 0.2 + 0.5 },
  }),
};

export default function Root() {
  const location = useLocation();
  return (
    <motion.div
      className="max-w-7xl m-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header>
        <nav className="py-4 flex gap-4">
          {links.map((link, i) => (
            <motion.div
              key={link.to}
              initial={["hidden"]}
              animate={["show"]}
              variants={item}
              custom={i}
            >
              <NavLink
                className={({ isActive }) =>
                  twMerge(
                    "hover:text-pink transition-colors",
                    isActive ? "text-pink" : ""
                  )
                }
                to={link.to}
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>
      </header>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <AnimatedOutlet />
        </motion.div>
      </AnimatePresence>
      <footer className="h-[80px]" />
    </motion.div>
  );
}

const AnimatedOutlet: React.FC = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};
