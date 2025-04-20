import contacts from "../../data/contacts";
import Contact from "./Contact";

export default function Contacts() {
  return contacts.map((contact, index) => {
    return <Contact {...contact} key={index} />;
  });
}
