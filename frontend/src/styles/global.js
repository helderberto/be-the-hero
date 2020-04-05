import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme: { settings, colors, fontSizes } }) => `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${settings.fontFamilyBase};
      font-weight: ${settings.fontWeightBase};
      font-size: ${settings.fontSizeBase};
      background: ${colors.gray[1]};
      -webkit-font-smoothing: antialiased;
    }

    input,
    button,
    textarea {
      font-family: ${settings.fontFamilyBase};
      font-weight: ${settings.fontWeightBase};
      font-size: ${fontSizes.size16};
    }

    button {
      cursor: pointer;
    }

    form input,
    form textarea {
      width: 100%;
      height: 60px;
      color: ${colors.black};
      border: 1px solid ${colors.gray[2]};
      padding: 0 24px;
      border-radius: 8px;
    }

    form textarea {
      min-height: 140px;
      padding: 16px 24px;
      line-height: 24px;
      resize: vertical;
    }
  `}
`;

export default GlobalStyle;
