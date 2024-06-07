import { FC } from "react";
import { Content, Hero, NavSections, SubTitle, Title } from "../../components";
import { TPropsSection } from "../../types";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiHtml5,
  SiSass,
  SiCss3,
  SiJest,
  SiCypress,
  SiNodedotjs,
  SiLinux,
} from "react-icons/si";

import "./style.css";

export const MainSection: FC<TPropsSection> = ({ setActiveSection }) => (
  <Content>
    <Hero cdn="https://media1.tenor.com/m/cX92mi1p-NYAAAAd/coding-anime.gif">
      <Title>Hi! This is my blog</Title>
    </Hero>
    <p>
      My name is Vladimir 👋 and I am a frontend developer. This blog 📓 contains my notes about my
      experiences and skills 🤯!
    </p>
    <SubTitle>My skills</SubTitle>
    <div className="flex justify-center flex-wrap gap-2">
      <SiJavascript className="skill__icon text-[#F7DF1E]" />
      <SiTypescript className="skill__icon text-[#3178C6]" />
      <SiReact className="skill__icon text-[#61DAFB]" />
      <SiRedux className="skill__icon text-[#764ABC]" />
      <SiHtml5 className="skill__icon text-[#E34F26]" />
      <SiSass className="skill__icon text-[#CC6699]" />
      <SiCss3 className="skill__icon text-[#1572B6]" />
      <SiJest className="skill__icon text-[#C21325]" />
      <SiCypress className="skill__icon text-[#69D3A7]" />
      <SiNodedotjs className="skill__icon text-[#5FA04E]" />
      <SiLinux className="skill__icon text-[#FCC624]" />
    </div>
    <SubTitle>Current articles</SubTitle>
    <NavSections notHomeLink setActiveSection={setActiveSection} />
  </Content>
);
