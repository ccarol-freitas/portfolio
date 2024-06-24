import { ProjectsInfoProps } from "../../data/@types/types";
import { Container } from "./styles";
import CardPinkSmall from "../../ui/components/CardPinkSmall/CardPinkSmall";
import { myProjects } from "../../utils/arrays";
import thumb from '../../images/projects_background.png'

const ProjectsContent = () => (
  <Container>
    {myProjects.map((projects: ProjectsInfoProps, index: number) => (
      <div key={index}>
        <CardPinkSmall
          text={projects.title}
          thumb={thumb}
          itemLink={projects.link}
          subtitle={projects.title}
        />
      </div>
    ))}
  </Container>
);

export default ProjectsContent;
