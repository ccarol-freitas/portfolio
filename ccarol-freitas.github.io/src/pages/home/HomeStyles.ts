import styled from "styled-components";

import ByographAvatar from '../../images/byograph.png';
import ProjectsAvatar from '../../images/projects.png';
import ArticlesAvatar from '../../images/articles.png';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #FCEE0A;
  height: 100vh;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  &.background-byograph {
    background-image: url(${ByographAvatar});
  }

  &.background-projects {
    background-image: url(${ProjectsAvatar});
  }

  &.background-articles {
    background-image: url(${ArticlesAvatar});
  }
  

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  @media (min-height: 500px) and (max-width: 700px) {
  background-size: auto;

  .fixed-bottom-tab {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0px 40px 32px 40px;
  }
}


`;