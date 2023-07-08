import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 559px;
  height: 615px;
  flex-shrink: 0;

  border: 4px solid #000;
  background: #00F0FF;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;