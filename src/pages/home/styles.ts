import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    background: #FCEE0A;
    height: 100vh;
    align-items: center;
    flex-direction: column;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

`;

export const ContentContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center; 
  margin-top: 20px; 

  @media (min-height: 500px) and (max-width: 700px) {

  flex-direction: column; 
  }


`

export const TabContent = styled.div` 
  @media (min-height: 500px) and (max-width: 700px) {
      display: flex;
      justify-content: center;

    .mobile-show {
      display: block !important;
      max-width: 607px;
      height: 665px;
    }

    .mobile-hide {
      display: none !important;
    }
  }

 img {
   max-width: 100%; 
   height: auto; 
}

 
`
