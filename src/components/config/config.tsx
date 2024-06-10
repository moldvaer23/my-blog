import {
  FirstProjectSection,
  MainSection,
  NeovimSection,
} from "../../sections";
import { TSection } from "../../types";

export const sectionsConfig = ({
  setActiveSection,
}: {
  setActiveSection: (T: number) => void;
}): TSection[] => [
  {
    name: "Home",
    description: "",
    component: <MainSection setActiveSection={setActiveSection} />,
  },
  {
    name: "My first project",
    description: "A story about my first project 😎!",
    component: <FirstProjectSection />,
  },
  {
    name: "Neovim",
    description: "About neovim",
    component: <NeovimSection />,
  },
];
