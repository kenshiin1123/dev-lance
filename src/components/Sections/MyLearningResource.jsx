import Section from "./Section";
import Header from "../Header";
import Squares from "../../components/Learning Resource/Squares";
import PictureView from "../../components/Learning Resource/PictureView";
import learningResource from "../../data/learning-resource";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function MyLearningResource() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectedItem = (item) => {
    setSelectedItem(() => item);
  };

  const handleExitPictureView = () => {
    setSelectedItem(() => null);
  };

  return (
    <Section id={"my-learning-resource"}>
      <br />
      <Header>My Learning Resource</Header>
      <Squares
        learningResource={learningResource}
        handleSelectedItem={handleSelectedItem}
      />
      <PictureView
        item={selectedItem}
        handleExitPictureView={handleExitPictureView}
        selectedItem={selectedItem}
      />
    </Section>
  );
}
