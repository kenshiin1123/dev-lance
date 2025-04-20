import { motion } from "framer-motion";
import { GoX } from "react-icons/go";
export default function Button({ handleExitPictureView }) {
  return (
    <motion.button onClick={handleExitPictureView}>
      <GoX className="ml-auto text-white text-5xl pt-4 pr-4 cursor-pointer hover:scale-85 duration-150" />
    </motion.button>
  );
}
