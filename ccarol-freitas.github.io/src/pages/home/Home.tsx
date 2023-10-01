import React, { useState } from "react";
import { Container } from "./HomeStyles";
import Tabs from "../../ui/components/Tabs/Tabs";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState("background-byograph");
  const tagInitial = "";

  const handleTabClicked = (tab: string) => {
    console.log("tab", tab)
    switch (tab) {
      case "byograph":
        setBackgroundImage("background-byograph");
        break;
      case "projects":
        setBackgroundImage("background-projects");
        break;
      default:
        setBackgroundImage("background-articles");
    }
  };

  return (
    <Container className={backgroundImage}>
      <Tabs
        tagInitial={tagInitial}
        tabs={[
          { name: "Biografia", selected: "byograph" },
          { name: "Projetos", selected: "projects" },
          { name: "Artigos", selected: "articles" },
        ]}
        setToogled={handleTabClicked}
        className="fixed-bottom-tab"
      />
    
    </Container>
  );
};

export default Home;
