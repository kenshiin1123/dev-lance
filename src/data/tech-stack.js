import mongodbImg from "../assets/images/Tech Stack/mongodb.png";
import expressImg from "../assets/images/Tech Stack/express.png";
import reactImg from "../assets/images/Tech Stack/react.png";
import nodejsImg from "../assets/images/Tech Stack/nodejs.png";
import tailwindCSSImg from "../assets/images/Tech Stack/tailwindcss.png";
import reactRouterImg from "../assets/images/Tech Stack/reactrouter.png";
import framerMotionImg from "../assets/images/Tech Stack/framer-motion.png";
import figmaImg from "../assets/images/Tech Stack/figma.png";
import reduxImg from "../assets/images/Tech Stack/redux.png";
import gitImg from "../assets/images/Tech Stack/git.png";

const techStack = [
  {
    name: "MongoDB",
    description:
      "Stores application data in a flexible, JSON-like format that your React app can read from or write to through an API.",
    image: mongodbImg,
    active: false,
  },
  {
    name: "Express",
    description:
      "Handles server-side logic and routing, acting as the bridge between your React frontend and the MongoDB database.",
    image: expressImg,
    active: false,
  },
  {
    name: "React",
    description: `Manages user interfaces by breaking them into reusable components that update efficiently when data changes.`,
    image: reactImg,
    active: false,
  },
  {
    name: "Node JS",
    description:
      "Runs JavaScript on the server, often used to build APIs or backends that your React app fetches data from.",
    image: nodejsImg,
    active: false,
  },
  {
    name: "Redux",
    description:
      "Redux is a state management library that centralizes and organizes application state in a single store, using actions and reducers to handle updates in a predictable, unidirectional flow. Redux Toolkit builds on this by simplifying setup and reducing boilerplate with utilities like createSlice and createAsyncThunk, making Redux easier to use and more scalable for modern applications.",
    image: reduxImg,
    active: false,
  },
  {
    name: "Tailwind CSS",
    description:
      "Applies pre-defined utility classes to style components quickly and consistently within a React app.",
    image: tailwindCSSImg,
    active: false,
  },
  {
    name: "React Router",
    description:
      "Enables navigation between different pages or views in a React app without reloading the page.",
    image: reactRouterImg,
    active: false,
  },
  {
    name: "Framer Motion",
    description:
      "Framer Motion is a React library that adds smooth animations, transitions, and gesture-based interactions to web interfaces. It handles layout changes, element entry/exit, drag-and-drop, and complex animation sequences with high performance.",
    image: framerMotionImg,
    active: false,
  },
  {
    name: "Git",
    description:
      "Git is a distributed version control system that tracks changes in code, enabling developers to collaborate, manage project history, and revert to previous versions when needed. It supports branching and merging, making it easy to experiment without affecting the main codebase. Paired with platforms like GitHub, Git streamlines team collaboration, code reviews, and deployment workflows.",
    image: gitImg,
    active: false,
  },
  {
    name: "Figma",
    description:
      "Design tool used to create and share UI/UX layouts, often serving as a blueprint for building components in a React app.",
    image: figmaImg,
    active: false,
  },
];

export default techStack;
