import { FC, ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export const Content: FC<TProps> = ({ children }) => (
  <section className="font-light flex flex-col gap-5">{children}</section>
);
