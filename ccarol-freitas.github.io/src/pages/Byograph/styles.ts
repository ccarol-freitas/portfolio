import styled from "styled-components";

export const Container = styled.div`
    padding: 24px;
    display: inline-flex;
    height: 537px;
    flex-direction: column;
    align-items: start;
    gap: 26px;

`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        gap: 24px;
        cursor: pointer;
    }

`

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
