import { ProjectsInfoProps } from "../../data/@types/types";
import { Container } from "./styles";
import CardPinkSmall from "../../ui/components/CardPinkSmall/CardPinkSmall";
import { myProjects } from "../../utils/arrays";
import thumb from '../../images/projects_background.png'

const ProjectsContent = () => (
  <Container>
    {myProjects.map((projects: ProjectsInfoProps, index: number) => (
      <a key={index} href={projects.link} target="_blank" rel="noopener noreferrer">
        <CardPinkSmall
          text={projects.title}
          thumb={thumb}
          itemLink={projects.link}
          subtitle={projects.title}
        />
      </a>
    ))}
  </Container>
);

export default ProjectsContent;
