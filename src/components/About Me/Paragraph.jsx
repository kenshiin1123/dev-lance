import RevealOnScroll from "./RevealOnScroll";
import { motion } from "framer-motion";

import React from "react";

export default function Paragraph({ children }) {
  return (
    <RevealOnScroll>
      <motion.p className="min-md:w-1/2 max-sm:text-lg text-2xl">
        {children}
      </motion.p>
    </RevealOnScroll>
  );
}
