import { Footer, Header, Main } from "../components";
import clsx from "clsx";
import "./style.css";

const theme = localStorage.getItem("theme") as string;

export const App = () => (
  <div
    className={clsx(
      "page min-w-[250px] min-h-[100vh] flex flex-col items-center font-roboto gap-5",
      {
        [`theme-${theme}`]: theme !== undefined || "light",
      }
    )}>
    <Header />
    <Main />
    <Footer />
  </div>
);
