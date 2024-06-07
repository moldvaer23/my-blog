import { FC } from "react";

type TProps = {
  children: string;
};

export const Title: FC<TProps> = ({ children }) => (
  <h2 className="font-bold text-3xl text-center mb-3">{children}</h2>
);
