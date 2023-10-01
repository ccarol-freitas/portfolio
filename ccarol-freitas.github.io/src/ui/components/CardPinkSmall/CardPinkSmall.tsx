import { Box, Title } from "./styles";

type Props = {
    text?: string;
    thumb?: string;
  };

const CardPinkSmall = (props: Props) => (
  <Box>
    {/* <img src={props.thumb} alt="" /> */}
    <Title>{props.text}</Title>
  </Box>
);

export default CardPinkSmall;
