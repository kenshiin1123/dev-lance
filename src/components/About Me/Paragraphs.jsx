import Paragraph from "../About Me/Paragraph";

export default function Paragraphs({ paragraphs }) {
  return paragraphs.map((paragraph, index) => (
    <Paragraph key={index}>{paragraph}</Paragraph>
  ));
}
