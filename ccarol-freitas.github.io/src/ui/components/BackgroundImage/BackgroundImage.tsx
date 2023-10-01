import React from "react";
import {  BackgroundImage } from "./styles";

type Props = {
   image: any;
}

const BackgroundComponent = ({ image }: Props) => (
  <>
    <BackgroundImage image={image} />
  </>
);

export default BackgroundComponent;
