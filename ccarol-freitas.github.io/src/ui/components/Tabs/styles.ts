import styled from 'styled-components'

export const Tab = styled.div`
    display: inline-flex;
    justify-content: space-between;
    height: 63px;
    background: #FF003C;
    margin-top: 16px;
 

    .tab-active {
        background: #FF406C;
    }

    .primaryPurple100-normal-24 {
        font-weight: 400;
    }

    .primaryPurple100-bold-24 {
        font-weight: 700;
    }

    
`

export const TabSelector = styled.button`
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 16px;
    gap: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
  
    text-align: center;
    color: #F5F5F5;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
`
