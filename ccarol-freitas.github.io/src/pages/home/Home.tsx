import React, { useState } from "react";
import { Container } from "./HomeStyles";
import Tabs from "../../ui/components/Tabs/Tabs";

const Home = () => {
  const [showTab, setShowTab] = useState<boolean>(false);

  return (
    <Container>
        <Tabs
          toggled={showTab}
          setToogled={setShowTab}
          tagInitial="byograph"
          tabs={[
            { name: "Biografia", selected: "byograph" },
            { name: "Projetos", selected: "projects" },
            { name: "Artigos", selected: "articles" },
          ]}
          className="fixed-bottom-tab"
        />
    </Container>
  );
};
export default Home;
