import contacts from "../../data/contacts";
import Contact from "./Contact";

export default function Contacts() {
  return (
    <div className="mt-10">
      {contacts.map((contact, index) => {
        return <Contact {...contact} key={index} />;
      })}
    </div>
  );
}
