import { motion } from "framer-motion";
import Image from "./Image";

export default function Images({ item }) {
  return (
    <motion.div className="flex justify-center items-center gap-5 my-auto">
      {item.images.map((image, index) => {
        return <Image image={image} index={index} key={index} />;
      })}
    </motion.div>
  );
}
