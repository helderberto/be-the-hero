import React from 'react';
import { ThemeProvider } from 'styled-components';
import { main } from 'styles/themes';
import GlobalStyle from 'styles/global';

function BaseTemplate({ children }) {
  return (
    <ThemeProvider theme={main}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export { BaseTemplate };
