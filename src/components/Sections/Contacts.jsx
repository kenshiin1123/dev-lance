import Section from "./Section";
import Header from "../Header";
import ContactsList from "../Contacts/Contacts";

export default function Contacts() {
  return (
    <Section id={"contacts"}>
      <Header>Contacts</Header>
      <ContactsList />
    </Section>
  );
}
