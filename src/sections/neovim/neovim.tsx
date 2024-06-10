import { FC } from "react";
import { Content, Hero, Title } from "../../components";

export const NeovimSection: FC = () => (
  <Content>
    <Hero cdn={require("../../assets/img/neovim.png")}>
      <Title>Neovim</Title>
    </Hero>
    <p>Hi ! This article is about my opinion about the neovim Ide.</p>
    <p>
      I decided to try this ide after a video of one cool devaslife channel. On
      this channel, a cool dude programs in the terminal and writes very cool
      projects. I really like them!
    </p>
    <p>
      So I decided to try something new and found his video on how he configures
      neovim. I repeated its configuration in places by adding my own extensions
      and began actively exploring this ide.
    </p>
    <p>
      <a href="https://www.youtube.com/watch?v=fFHlfbKVi30">Here</a> is his
      video of how he configures neovim. He takes shooting very seriously and
      makes beautiful videos!
    </p>
  </Content>
);
