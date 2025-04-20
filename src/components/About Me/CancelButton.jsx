import { AnimatePresence, motion } from "framer-motion";
import { MdCancel } from "react-icons/md";

export default function CancelButton({ handleClick, isSpeaking }) {
  return (
    <AnimatePresence>
      {isSpeaking && (
        <motion.button
          initial={{ opacity: 0, marginLeft: "0rem" }}
          animate={{ opacity: 1, marginLeft: ".5rem" }}
          exit={{ opacity: 0, marginLeft: "0rem" }}
          className="text-white text-3xl mt-5 hover:scale-90"
          onClick={handleClick}
        >
          <MdCancel className="my-auto" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
