import { motion } from "framer-motion";
import Square from "./Square";

export default function Squares({ handleClick, techStack }) {
  return (
    <motion.div className="grid grid-cols-4 gap-2 mb-10">
      {techStack.map((tech, index) => {
        return (
          <Square
            handleClick={handleClick}
            image={tech.image}
            key={index}
            name={tech.name}
            duration={index > 0 ? index * 0.3 : 0.2}
          />
        );
      })}
    </motion.div>
  );
}
