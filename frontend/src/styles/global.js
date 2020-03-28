import { createGlobalStyle } from 'styled-components';

import Color from 'styles/colors';
import Typography from 'styles/typography';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${Typography.primaryFamily};
    font-weight: ${Typography.weightRegular};
    font-size: ${Typography.primarySize};
    background: ${Color.gray[1]};
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-family: ${Typography.primaryFamily};
    font-weight: ${Typography.weightRegular};
    font-size: ${Typography.size18};
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: ${Color.black};
    border: 1px solid ${Color.gray[2]};
    padding: 0 24px;
    border-radius: 8px;
  }
`;

export default GlobalStyle;
