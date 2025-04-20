import { motion } from "framer-motion";
import "./circle.css";
export default function Circle({ name, image, handleClick, duration }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: duration }}
      draggable="false"
      name={name}
      onClick={() => handleClick(name)}
      className="hover:scale-90 transition-[transform: scale] duration-150 select-none mb-5 relative max-sm:size-20 size-40 bg-white rounded-full aspect-square flex justify-center items-center mx-auto p-2"
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
