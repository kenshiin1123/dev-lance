import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";

import Images from "./Images";
import { useEffect } from "react";

export default function PictureView({
  item,
  handleExitPictureView,
  selectedItem,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key == "Escape") {
        handleExitPictureView();
      }
    };

    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {selectedItem && (
        <motion.div
          key={item}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute backdrop-blur-md mx-auto size-[100%] flex flex-col"
        >
          <Button handleExitPictureView={handleExitPictureView} />
          <Images item={item} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
