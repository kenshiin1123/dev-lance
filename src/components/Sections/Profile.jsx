import React from "react";
import Section from "./Section";
import Image from "../Profile/Image";
import Name from "../Profile/Name";

export default function Profile() {
  return (
    <Section id={"profile"}>
      <Image />
      <Name />
    </Section>
  );
}
