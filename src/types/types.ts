import { ReactElement } from "react";

export type TSection = {
  name: string;
  description: string;
  component: ReactElement;
};

export type TPropsSection = {
  setActiveSection: (T: number) => void;
};
