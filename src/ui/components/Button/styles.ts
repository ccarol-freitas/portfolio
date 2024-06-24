import { styled } from "styled-components";

export const Button = styled.button`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    width: 131px;
    height: 56px;
    border: 2px solid #0A0A0A;
    background:  #FF003C;
    cursor: pointer;

    
    &:hover {
        background: #AF0029 !important ;
    }


    img {
        height: 20px;
        width: 20px;
    }
`;

export const Text = styled.p`
    color: #FFF;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    white-space: nowrap;
`;

