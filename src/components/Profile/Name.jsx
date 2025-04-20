import { motion } from "framer-motion";

export default function Name() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-white max-sm:text-xl min-sm:text-2xl min-md:text-4xl text-center"
      style={{ fontFamily: "Junge" }}
    >
      Lance Ivan Gil Fernandez
    </motion.h1>
  );
}
