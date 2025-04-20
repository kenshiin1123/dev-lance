import Main from "./Main";

// Sections
import Profile from "./Profile";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import MyLearningResource from "./MyLearningResource";
import Projects from "./Projects";
import Contacts from "./Contacts";

export default function Index() {
  return (
    <Main>
      <Profile />
      <AboutMe />
      <TechStack />
      <MyLearningResource />
      <Projects />
      <Contacts />
    </Main>
  );
}
