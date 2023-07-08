import * as React from "react";
import { Container } from "./HomeStyles";
import Content from "ui/components/Content/Content";

const Home = () => {
  const component =   <h1>New page</h1>
  return(
  <Container>
    <Content  children={component}/>
  </Container>
);
}
export default Home;
