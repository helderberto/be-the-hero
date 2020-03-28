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

  .button {
    width: 100%;
    height: 60px;
    background: ${Color.red};
    border: 0;
    border-radius: 8px;
    color: ${Color.white};
    font-weight: ${Typography.weightBold};
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    line-height: 60px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export default GlobalStyle;
