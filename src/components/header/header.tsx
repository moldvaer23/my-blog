import { FC } from "react";
import { ToggleTheme } from "../toggle-theme";

export const Header: FC = () => (
  <header className="w-[100%] p-1 min-w-[250px] z-10 flex justify-between items-center fixed backdrop-blur-sm">
    <h1 className="text-2xl">Moldvaer</h1>
    <ToggleTheme />
    {/* <h1 className="text-3xl text-center">Hi, I'm Vladimir 🖐️</h1> */}
  </header>
);
