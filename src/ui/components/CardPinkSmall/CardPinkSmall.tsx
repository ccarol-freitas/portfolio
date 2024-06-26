import { Box, Title } from "./styles";

type Props = {
  itemLink: string;
  text?: string;
  thumb?: string;
  subtitle?: string;
  onClick?: () => void;
};

const CardPinkSmall = (props: Props) => (
  <Box>
    <img
      title={props.subtitle}
      src={props.thumb}
      width="100%"
      height="156px"
      alt={props.subtitle}
    />
    <Title onClick={props.onClick}>
      <a href={props.itemLink} target="_blank" rel="noopener noreferrer">
        {props.text}
      </a>
    </Title>
    <p>Clique no card para ver o projeto</p>
  </Box>
);

export default CardPinkSmall;
