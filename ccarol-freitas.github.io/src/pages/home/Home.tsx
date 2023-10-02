import React, { useState, useEffect, ReactElement } from "react";

import { Container, ContentContainer, TabContent } from "./styles";
import Tabs from "../../ui/components/Tabs/Tabs";
import Content from "../../ui/components/Content/Content";
import ByographAvatar from "../../images/byograph.png";
import ProjectsAvatar from "../../images/projects.png";
import ArticlesAvatar from "../../images/articles.png";
import ByographContent from "../Byograph/Byograph";
import ArticlesContent from "../Articles/Articles";
import ProjectsContent from "../Projects/Projects";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(ByographAvatar);
  const [renderComponent, setRenderComponent] = useState<ReactElement | null>(
    null
  );

  useEffect(() => {
    if (backgroundImage === "") {
      setBackgroundImage(ByographAvatar);
    }
    setRenderComponent(null);
  }, []);

  const handleTabClicked = (tab: string) => {
    switch (tab) {
      case "byograph":
        setBackgroundImage(ByographAvatar);
        setRenderComponent(<ByographContent />);
        break;
      case "projects":
        setBackgroundImage(ProjectsAvatar);
        setRenderComponent(<ProjectsContent />);
        break;
      default:
        setBackgroundImage(ArticlesAvatar);
        setRenderComponent(<ArticlesContent />);
    }
  };

  return (
    <>
      <Container>
        <Tabs
          tabs={[
            { name: "Biografia", selected: "byograph" },
            { name: "Projetos", selected: "projects" },
            { name: "Artigos", selected: "articles" },
          ]}
          setToogled={handleTabClicked}
          className="fixed-bottom-tab"
          tagInitial={""}
        />
        <ContentContainer>
          <TabContent>
            <img
              src={backgroundImage}
              alt=""
              className={backgroundImage === "" ? "mobile-show" : "mobile-hide"}
            />
          </TabContent>

          <TabContent>
            {renderComponent && <Content children={renderComponent} />}
          </TabContent>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Home;
