import { motion } from "framer-motion";

export default function Container({ children }) {
  return (
    <motion.div className="grid mx-auto mt-10 gap-5 max-sm:grid-cols-1 min-sm:grid-cols-2 min-md:grid-cols-3">
      {children}
    </motion.div>
  );
}
