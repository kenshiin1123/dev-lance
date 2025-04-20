import { motion } from "framer-motion";
import React from "react";
export default function Square({ handleClick, image, name, duration }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: duration }}
      draggable="false"
      name={name}
      onClick={() => handleClick(name)}
      className="rounded hover:scale-90 transition-[transform: scale] duration-150 select-none  relative max-sm:size-20 size-28 bg-white aspect-square flex justify-center items-center p-3"
    >
      <img src={image} alt="" className="w-full" draggable="false" />
      <motion.h1
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="w-full h-full absolute flex justify-center items-center bg-[#000000ad] text-white text-3xl"
      >
        {name}
      </motion.h1>
    </motion.button>
  );
}
