import { FC } from "react";
import { Content, Title } from "../../components";
import SubTodoScreen from "../../assets/img/first-project.png";

export const FirstProjectSection: FC = () => (
  <Content>
    <Title>My first project</Title>
    <div>
      <img className="rounded-3xl" src={SubTodoScreen} alt="Screen site" />
    </div>
    <p>
      My first project is an application with tasks. What are its functions?
      <br />
      - Create, delete and edit tasks
      <br />
      - Create, delete and edit subtasks
      <br />
      - Divide tasks into areas in the form of sheets and so on.
      <br />
    </p>
    <p>
      I developed this application on React. It has no backend part, so I store all the data with a
      certain logic in localStorage.
    </p>
    <p>
      You can view this site{" "}
      <a target="_blank" rel="noopener noreferrer" href="https://moldvaer23.github.io/sub-tasker/">
        here
      </a>
    </p>
    <p>
      P.S This project was not made for mobile devices, so if you use your phone, the site will be
      crooked{")"}
    </p>
  </Content>
);
