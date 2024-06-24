import styled from "styled-components";

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Fundo transparente */
  }

  &::-webkit-scrollbar-thumb {
    background: #000; /* Polegar preto */
    border-radius: 4px; /* Bordas arredondadas */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #000; /* Cor do polegar ao passar o mouse */
  }

  /* Para navegadores que não suportam WebKit scrollbar */
  scrollbar-width: thin; /* Somente para Firefox */
  scrollbar-color: #000 transparent; /* Somente para Firefox */
`;