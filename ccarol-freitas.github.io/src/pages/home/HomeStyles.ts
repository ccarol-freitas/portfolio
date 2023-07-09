import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  height:100vh;
  background: #FCEE0A;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;