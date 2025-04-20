import { motion } from "framer-motion";
import React from "react";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { VscCircle } from "react-icons/vsc";

export default function LayoutToggleButton({ isSquare, toggleIsSquare }) {
  return (
    <motion.button
      key={isSquare}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-gray-600 hover:text-white mx-auto hover:scale-95 duration-100 mt-5"
      onClick={toggleIsSquare}
    >
      {isSquare ? (
        <TfiLayoutGrid3 className="text-2xl mx-auto" />
      ) : (
        <div className="flex text-xl">
          <VscCircle />
          <VscCircle />
          <VscCircle />
          <VscCircle />
        </div>
      )}
    </motion.button>
  );
}
