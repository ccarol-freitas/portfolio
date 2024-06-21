import React from "react";
import { Box } from "./styles";
import { PropsContent } from "../../../data/@types/types";
import { ScrollContainer } from "../Scroll/styles";

const Content = (props: PropsContent) => {
  return <Box><ScrollContainer>{props.children}</ScrollContainer></Box>;
};

export default Content;
