import List from "./List";

const LINKS = [
  {
    name: "Home",
    href: "/#profile",
  },
  {
    name: "About Me",
    href: "/#about-me",
  },
  {
    name: "Tech",
    href: "/#tech-stack",
  },
  {
    name: "Learning",
    href: "/#my-learning-resource",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contacts",
    href: "/#contacts",
  },
];

export default function Lists() {
  return LINKS.map((link, index) => {
    return (
      <List
        key={index}
        name={link.name}
        href={link.href}
        duration={index == 0 ? 0.25 : index * 0.4}
      />
    );
  });
}
