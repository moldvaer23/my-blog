import { FC, ReactElement } from "react";

type TProps = {
  cdn: string;
  children: ReactElement;
};

export const Hero: FC<TProps> = ({ cdn, children }) => (
  <div className="z-4 relative text-white">
    <img className="rounded-3xl" src={cdn} alt="Hero" />
    <div className="absolute rounded-3xl z-2 top-0 w-[100%] h-[100%] bg-[#000000b1]"></div>
    <div className="absolute z-3 top-[50%] w-[100%]">{children}</div>
  </div>
);
