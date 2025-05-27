import Section from "./Section";
import Header from "../Header";
import Article from "../About Me/Article";
import Paragraphs from "../About Me/Paragraphs";
import paragraphs from "../../data/about-me.js";

export default function AboutMe() {
  return (
    <Section id={"about-me"}>
      <Header>About Me</Header>
      <Article>
        <Paragraphs paragraphs={paragraphs} />
      </Article>
    </Section>
  );
}
