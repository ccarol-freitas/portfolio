import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    padding: 16px 16px 24px 16px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    gap: 14px;
    border: 2px solid #000;
    background: #FF003C;
    cursor: pointer;

    iframe {
        overflow: hidden;
    }

   :hover { 
        background: #AF0029;
    }

   :focus { 
        background: #FFDFE7;
    }

   :active { 
        background: #FF406C;
    }

    img {
        height: 156px;
        width: 192px;
    }
 
`

export const Title = styled.h1`
    white-space: nowrap;

    a {
        color: #FFF;
        font-family: 'IBM Plex Sans Condensed', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-decoration: none;
    }
`
