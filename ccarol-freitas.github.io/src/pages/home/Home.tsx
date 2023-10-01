import React, { useState, useEffect, ReactElement } from "react";
import { Container, ContentContainer, TabContent } from "./HomeStyles";
import Tabs from "../../ui/components/Tabs/Tabs";
import Content from "../../ui/components/Content/Content";
import ByographAvatar from "../../images/byograph.png";
import ProjectsAvatar from "../../images/projects.png";
import ArticlesAvatar from "../../images/articles.png";
import ByographContent from "../Byograph/Byograph";
import ArticlesContent from "../Articles/Articles";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(ByographAvatar);
  const [renderComponent, setRenderComponent] = useState<ReactElement>();
  const [showContent, setShowContent] = useState(true);

  // useEffect(() => {
  //   if (!tagInitial) {
  //     setBackgroundImage(ByographAvatar);
  //     setShowContent(false);
  //   } else {
  //     setShowContent(true);
  //   }
  // }, []);

  const handleTabClicked = (tab: string) => {
    switch (tab) {
      case "byograph":
        setBackgroundImage(ByographAvatar);
        setRenderComponent(<ByographContent />);
        break;
      case "projects":
        setBackgroundImage(ProjectsAvatar);
        setRenderComponent(undefined);
        break;
      default:
        setBackgroundImage(ArticlesAvatar);
        setRenderComponent(ArticlesContent);
    }
  };

  return (
    <Container>
      <Tabs
        tagInitial="byograph"
        tabs={[
          { name: "Biografia", selected: "byograph" },
          { name: "Projetos", selected: "projects" },
          { name: "Artigos", selected: "articles" },
        ]}
        setToogled={handleTabClicked}
        className="fixed-bottom-tab"
      />
      <ContentContainer>
        <TabContent>
          <img src={backgroundImage} alt="" />
        </TabContent>

        <TabContent>
          <Content children={renderComponent} />
        </TabContent>
      </ContentContainer>
    </Container>
  );
};

export default Home;
