import React from "react";
import { Box } from "./ContentStyles";
import { PropsContent } from "../../../data/@types/types";

const Content = (props: PropsContent) => {
  return <Box>{props.children}</Box>;
};

export default Content;
