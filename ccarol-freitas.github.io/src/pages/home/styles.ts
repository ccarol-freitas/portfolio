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

  @media (min-height: 500px) and (max-width: 700px) {

  .fixed-bottom-tab {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0px 40px 32px 40px;
  }

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
      .mobile-show {
        display: block !important;
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
