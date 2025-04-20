// Components
import Image from "./Image";
import Container from "./Container";
import Name from "./Name";
import Email from "./Email";
import Link from "./Link";
import ToolTip from "./ToolTip";

import useContacts from "../../hooks/contacts.js";

export default function Contact({ name, image, email, link }) {
  const { showToolTip, handleShowToolTip } = useContacts(email);

  const buttonAndLinkClass =
    "text-sm border border-white p-1 rounded ml-auto hover:scale-95 duration-100";

  return (
    <Container>
      <Image image={image} name={name} />
      <Name name={name} />
      <Email
        buttonAndLinkClass={buttonAndLinkClass}
        email={email}
        handleShowToolTip={handleShowToolTip}
      />
      <Link buttonAndLinkClass={buttonAndLinkClass} link={link} />
      <ToolTip email={email} showToolTip={showToolTip} />
    </Container>
  );
}
