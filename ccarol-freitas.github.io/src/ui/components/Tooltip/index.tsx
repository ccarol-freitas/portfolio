import { Container, TooltipText } from "./styles";

type Props = {
  text: string;
  image: string;
};

const Tooltip = (props: Props) => (
  <Container>
    <img src={props.image} alt="" />
    <TooltipText className="tooltiptext">{props.text}</TooltipText>
  </Container>
);

export default Tooltip;
