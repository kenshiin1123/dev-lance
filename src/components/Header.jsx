import { motion } from "framer-motion";

export default function Header({ children }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-sm:text-2xl max-sm:mt-5 text-5xl text-white text-center"
      style={{ fontFamily: "Kadwa" }}
    >
      {children}
    </motion.h1>
  );
}
