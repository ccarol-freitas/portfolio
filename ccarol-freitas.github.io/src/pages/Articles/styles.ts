import styled from "styled-components";

export const Container = styled.div``

export const Box = styled.div``

export const Title = styled.h1`
    color: #0A0A0A;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Text = styled.p`
    color: #0A0A0A;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Card = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    border: 2px solid #0A0A0A;
    background: #FF003C;
    margin:16px 63px 10px 63px;

    a {
        color: #FFF;
        font-family: 'IBM Plex Sans Condensed', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-decoration-line: underline;
        text-transform: uppercase;
    }
`