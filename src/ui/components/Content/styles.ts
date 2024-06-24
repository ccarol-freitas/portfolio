import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 559px;
  flex-shrink: 0;
  border: 4px solid #000;
  background: #00F0FF;
  overflow-y: auto;

  /* Largura menor que 768px */
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  /* Largura maior ou igual a 768px */
  @media only screen and (min-width: 768px) {
    width: 559px;
  }
`;


