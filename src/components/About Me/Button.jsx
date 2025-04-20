import { motion } from "framer-motion";
import React from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";

export default function Button({ handleClick }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="border text-white w-32 mt-5 rounded py-1 select-none flex gap-2 justify-center items-center"
      style={{ fontFamily: "Kadwa" }}
      onClick={handleClick}
    >
      Read Aloud <HiMiniSpeakerWave />
    </motion.button>
  );
}
