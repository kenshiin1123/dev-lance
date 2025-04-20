import projects from "../../data/projects";
import Square from "./Square";
export default function Squares() {
  return projects.map((project, index) => {
    return <Square {...project} key={index} />;
  });
}
