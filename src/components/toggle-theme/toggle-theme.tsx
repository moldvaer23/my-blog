import { FC, useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import clsx from "clsx";

export const ToggleTheme: FC = () => {
  const page = document.querySelector(".page");
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );
  const btnClass = "text-gray-400 bg-white rounded-full";
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    page?.classList.remove(`theme-${theme === "light" ? "dark" : "light"}`);
    page?.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme, page]);

  return (
    <button
      onClick={toggleTheme}
      className={clsx("flex items-center justify-center gap-3 rounded-full transition", {
        ["bg-orange-300"]: theme === "light",
        ["bg-gray-500"]: theme === "dark",
      })}>
      <span
        className={clsx("p-2", {
          [btnClass]: theme === "light",
        })}>
        <IoSunny />
      </span>
      <span
        className={clsx("p-2", {
          [btnClass]: theme === "dark",
        })}>
        <IoMoon />
      </span>
    </button>
  );
};
