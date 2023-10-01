import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 615px;
  flex-shrink: 0;
  border: 4px solid #000;
  background: #00F0FF;
  overflow-y: auto;

    ::-webkit-scrollbar {
    width: 10px; 
    background-color: #00F0FF;
    }
    
  ::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 5px; 
  }

  /* Largura menor que 768px */
  @media only screen and (max-width: 767px) {
    width: 360px;
  }

  /* Largura maior ou igual a 768px */
  @media only screen and (min-width: 768px) {
    width: 559px;
  }
`;


