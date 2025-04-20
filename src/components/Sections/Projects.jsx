import Section from "./Section";
import Header from "../Header";
import Container from "../Projects/Container";
import Squares from "../Projects/Squares";

export default function Projects() {
  return (
    <Section id={"projects"}>
      <Header>Projects</Header>
      <Container>
        <Squares />
      </Container>
    </Section>
  );
}
