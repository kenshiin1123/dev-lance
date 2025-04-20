import { motion } from "framer-motion";

export default function List({ name, href, duration }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: duration }}
      whileHover={{ background: "white", color: "black" }}
      className="border border-black  rounded"
    >
      <a
        href={href}
        className="text-nowrap select-none w-full h-full px-2"
        draggable={false}
        style={{ fontFamily: "Junge" }}
      >
        {name}
      </a>
    </motion.li>
  );
}
