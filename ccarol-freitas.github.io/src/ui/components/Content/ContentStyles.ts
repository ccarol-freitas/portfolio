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

    /* Estilos personalizados para a barra de rolagem */
    ::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem */
    background-color: #00F0FF; /* Remover o fundo cinza */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000; /* Cor do polegar da barra de rolagem */
    border-radius: 5px; /* Raio de borda do polegar da barra de rolagem */
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


