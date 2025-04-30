import Section from "./Section";
import Header from "../Header";
import Article from "../About Me/Article";
import Paragraphs from "../About Me/Paragraphs";
import Button from "../About Me/Button";
import CancelButton from "../About Me/CancelButton";
import Container from "../About Me/Container.jsx";
import paragraphs from "../../data/about-me.js";
import useAboutMe from "../../hooks/about-me.hook.js";

export default function AboutMe() {
  const { isSpeaking, handleButtonClick, handleCancelButtonClick } =
    useAboutMe();

  return (
    <Section id={"about-me"}>
      <Header>About Me</Header>

      {/* "Read Aloud" Button Container */}
      <Container>
        <Button handleClick={handleButtonClick} />
        <CancelButton
          handleClick={handleCancelButtonClick}
          isSpeaking={isSpeaking}
        />
      </Container>
      <Article>
        <Paragraphs paragraphs={paragraphs} />
      </Article>
    </Section>
  );
}
