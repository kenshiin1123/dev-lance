import Section from "./Section";
import Header from "../Header";
import Container from "../Projects/Container";
import Squares from "../Projects/Squares";
import InfoDisplay from "../InfoDisplay";

export default function Projects() {
  return (
    <Section id={"projects"}>
      <Header>Projects</Header>
      <InfoDisplay>
        Please note: The project may take a few moments to load when fetching
        data. This is due to the Render backend powering on.
      </InfoDisplay>
      <Container>
        <Squares />
      </Container>
    </Section>
  );
}
