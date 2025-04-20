import { motion } from "framer-motion";

export default function Name({ name }) {
  return (
    <motion.h2
      key={name}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="max-sm:text-2xl text-3xl text-white my-3"
      style={{ fontFamily: "Kadwa" }}
    >
      {name}
    </motion.h2>
  );
}
