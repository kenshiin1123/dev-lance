import { motion } from "framer-motion";
import React from "react";

export default function Container({ children }) {
  return (
    <motion.div className="relative border border-white text-xl flex items-center p-3 text-white gap-5 max-sm:w-72 w-96 mx-auto mt-3 rounded">
      {children}
    </motion.div>
  );
}
