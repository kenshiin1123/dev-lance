import { motion } from "framer-motion";

export default function Description({ description }) {
  return (
    <motion.p
      key={description}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="max-sm:text-md text-xl text-white text-justify min-md:w-[65%]"
      style={{ fontFamily: "Junge" }}
    >
      {description}
    </motion.p>
  );
}
