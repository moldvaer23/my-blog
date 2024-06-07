import { FC, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { IoArrowUp } from "react-icons/io5";
import { TSection } from "../../types";
import { sectionsConfig } from "../config";

export const Main: FC = () => {
  const refBlog = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number | undefined>(undefined);

  /* Blog sections */
  const sections: TSection[] = useMemo(() => sectionsConfig({ setActiveSection }), []);

  useEffect(() => {
    setScrollHeight(refBlog.current?.scrollHeight);
  }, [activeSection]);

  return (
    <main
      ref={refBlog}
      className="w-[100%] max-w-[500px] pl-1 pr-1 mt-10 flex flex-col items-center justify-center gap-5">
      <div className="flex gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            className={clsx(
              "h-2 w-5 max-sm:h-3 max-sm:w-10 bg-gray-500 rounded-full hover:bg-gray-700 active:bg-gray-950",
              {
                ["bg-orange-300"]: activeSection === index,
              }
            )}
            onClick={() => setActiveSection(index)}
          />
        ))}
      </div>

      {sections[activeSection].component}

      {scrollHeight && scrollHeight > window.innerHeight && (
        <div className="flex w-[100%] justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0 })}
            className="p-2 cursor-pointer transition text-[#212121] bg-orange-300 rounded-full hover:bg-gray-700 active:bg-gray-950 ">
            <IoArrowUp />
          </button>
        </div>
      )}
    </main>
  );
};
