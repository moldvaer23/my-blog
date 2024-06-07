import { FC, memo } from "react";
import { sectionsConfig } from "../config";

type TProps = {
  notHomeLink?: boolean;
  setActiveSection: (T: number) => void;
};

export const NavSections: FC<TProps> = memo(({ notHomeLink, setActiveSection }) => {
  const sections = sectionsConfig({ setActiveSection });
  if (notHomeLink) sections.shift();

  return (
    <nav>
      <ul className="flex flex-col gap-1">
        {sections.map((section, index) => (
          <li key={index} className="flex gap-5">
            <button
              className="text-orange-500 font-normal hover:text-gray-500"
              onClick={() => setActiveSection(index + 1)}>
              {section.name}
            </button>
            {section.description.length !== 0 && <span>{section.description}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
});
