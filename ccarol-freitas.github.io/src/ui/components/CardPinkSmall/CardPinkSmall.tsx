import { Box, Title } from "./styles";

type Props = {
  text?: string;
  thumb?: string;
  subtitle?: string;
  onClick?: () => void;
};

const CardPinkSmall = (props: Props) => (
  <Box>
    <iframe
      title={props.subtitle}
      src={props.thumb}
      width="192px"
      height="156px"
    ></iframe>
    <Title onClick={props.onClick}>
      <a href={props.thumb} target="_blank">
        {props.text}
      </a>
    </Title>
  </Box>
);

export default CardPinkSmall;
