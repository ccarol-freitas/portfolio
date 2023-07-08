import { createGlobalStyle } from 'styled-components';
import { px2vw } from '../../utils/px2vwFunction';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(48)};

      @media (min-width: 768px) {
        font-size: ${px2vw(40)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(38)};
      }
    }
`;

export default Global;