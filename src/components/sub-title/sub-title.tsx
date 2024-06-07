import { FC } from "react";

type TProps = {
  children: string;
};

export const SubTitle: FC<TProps> = ({ children }) => (
  <h3 className="font-normal text-2xl text-center">{children}</h3>
);
