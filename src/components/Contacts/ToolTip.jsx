import { AnimatePresence, motion } from "framer-motion";
import React from "react";
export default function ToolTip({ email, showToolTip }) {
  return (
    <AnimatePresence>
      {email && showToolTip && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, y: -55, x: 10 }}
          exit={{ opacity: 0, x: 10, y: 0 }}
          className="absolute right-0 bg-black text-white border border-white rounded-lg p-2 text-sm select-none"
        >
          Copied to Clipboard!
        </motion.div>
      )}
    </AnimatePresence>
  );
}
