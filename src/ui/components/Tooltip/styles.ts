import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltiptext {
    visibility: visible; 
  }
`;

export const TooltipText = styled.div`
  visibility: hidden;
  min-width: 80px;
  background-color: #FFDFE7;
  color: black;
  text-align: center;
  padding: 5px 0;
  border: 1px solid black;
  font-weight: bold;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: x-small;
  position: absolute;
  z-index: 1;
  bottom: -23%;
  left: 102%;
  transform: translateX(-50%);
`;
