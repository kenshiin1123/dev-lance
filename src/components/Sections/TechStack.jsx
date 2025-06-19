import Section from "./Section";
import Header from "../Header";
import Container from "../../components/Tech Stack/Container";
import Circles from "../../components/Tech Stack/Circles";
import { useState } from "react";
import techStack from "../../data/tech-stack";

import Name from "../../components/Tech Stack/Name";
import Description from "../../components/Tech Stack/Description";

import Squares from "../../components/Tech Stack/Squares";

import LayoutToggleButton from "../../components/Tech Stack/LayoutToggleButton";

import InfoDisplay from "../InfoDisplay";

export default function TechStack() {
  const [tech, setTech] = useState(techStack);
  const [isSquare, setIsSquare] = useState(true);

  const handleActiveTech = (name) => {
    name = name.toLowerCase();

    setTech(() =>
      techStack.map((element) => {
        if (element.name.toLowerCase() === name) {
          return { ...element, active: !element.active };
        }
        return element;
      })
    );
  };

  const toggleIsSquare = () => {
    setIsSquare((prevSquare) => !prevSquare);
  };

  const activeTech = tech.filter((element) => element.active)[0];

  return (
    <Section id={"tech-stack"}>
      <Header>Tech</Header>
      <InfoDisplay>Click a logo to show its description.</InfoDisplay>
      <LayoutToggleButton isSquare={isSquare} toggleIsSquare={toggleIsSquare} />
      <Container>
        {isSquare ? (
          <Squares handleClick={handleActiveTech} techStack={techStack} />
        ) : (
          <Circles handleClick={handleActiveTech} techStack={techStack} />
        )}
      </Container>

      {activeTech && (
        <>
          <Name name={activeTech.name} />
          <Description description={activeTech.description} />
        </>
      )}
    </Section>
  );
}
