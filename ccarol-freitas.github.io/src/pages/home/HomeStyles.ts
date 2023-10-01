import styled from "styled-components";

import ByographAvatar from '../../images/byograph.png';
import ProjectsAvatar from '../../images/projects.png';
import ArticlesAvatar from '../../images/articles.png';


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
    align-items: flex-start

  }
`

export const TabContent = styled.div` 
  flex: 1; 

  img {
    max-width: 100%; 
   height: auto; 
  }
`
