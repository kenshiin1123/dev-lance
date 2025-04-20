import Circle from "./Circle";
export default function Circles({ handleClick, techStack }) {
  return techStack.map((tech, index) => {
    return (
      <Circle
        handleClick={handleClick}
        image={tech.image}
        key={index}
        name={tech.name}
        duration={index > 0 ? index * 0.3 : 0.2}
      />
    );
  });
}
