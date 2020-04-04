import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.settings.fontFamilyBase};
      font-weight: ${theme.settings.fontWeightBase};
      font-size: ${theme.settings.fontSizeBase};
      background: ${theme.colors.gray[1]};
      -webkit-font-smoothing: antialiased;
    }

    input,
    button,
    textarea {
      font-family: ${theme.settings.fontFamilyBase};
      font-weight: ${theme.settings.fontWeightBase};
      font-size: ${theme.settings.fontSizeBase};
    }

    button {
      cursor: pointer;
    }

    form input {
      width: 100%;
      height: 60px;
      color: ${theme.colors.black};
      border: 1px solid ${theme.colors.gray[2]};
      padding: 0 24px;
      border-radius: 8px;
    }
  `}
`;

export default GlobalStyle;
