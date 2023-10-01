import styled from "styled-components";

type Props = {
  image: any;
}

export const BackgroundImage = styled.div<Props>`
  background-image: url(${props => props.image}); 
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;
