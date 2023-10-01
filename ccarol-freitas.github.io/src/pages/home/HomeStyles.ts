import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #FCEE0A;
  height: 100vh;
  

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