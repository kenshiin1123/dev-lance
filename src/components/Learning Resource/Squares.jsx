import Square from "./Square";
import Container from "./Container";
export default function Squares({ learningResource, handleSelectedItem }) {
  return (
    <Container>
      {learningResource.map((item) => {
        return (
          <Square
            item={item}
            key={item.name}
            handleSelectedItem={handleSelectedItem}
          />
        );
      })}
    </Container>
  );
}
