import React from "react";
import { Box } from "./styles";
import { PropsContent } from "../../../data/@types/types";

const Content = (props: PropsContent) => {
  return <Box>{props.children}</Box>;
};

export default Content;
