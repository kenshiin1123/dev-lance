import { motion } from "framer-motion";
import React from "react";

export default function Container({ children }) {
  return (
    <motion.div
      className="flex justify-center gap-10
    my-10"
    >
      {children}
    </motion.div>
  );
}
