import { ProjectsInfoProps } from "../../data/@types/types";
import { Container } from "./styles";
import CardPinkSmall from "../../ui/components/CardPinkSmall/CardPinkSmall";
import { myProjects } from "../../utils/arrays";

type Props = {
  openSlideshow?: (imageUrl: string) => void;
};

const ProjectsContent = ({ openSlideshow }: Props) => {
  return (
    <>
      <Container>
        {myProjects.map((projects: ProjectsInfoProps, index: number) => (
          <div key={index}>
            <CardPinkSmall
              text={projects.title}
              thumb={projects.link}
              subtitle={projects.title}
            />
          </div>
        ))}
      </Container>
    </>
  );
};

export default ProjectsContent;
