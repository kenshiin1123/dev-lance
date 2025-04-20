import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function RevealParagraph({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-110px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center"
    >
      {children}
    </motion.div>
  );
}
