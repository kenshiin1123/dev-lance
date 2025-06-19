import { IoMdInformationCircle } from "react-icons/io";
import { motion } from "framer-motion";

const InfoDisplay = ({ children }) => {
  return (
    <motion.p
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white flex items-center gap-2 text-sm w-[85%] md:w-[95%] mx-auto mt-10"
    >
      <span className="text-xl">
        <IoMdInformationCircle />
      </span>
      {children}
    </motion.p>
  );
};

export default InfoDisplay;
