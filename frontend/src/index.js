import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import App from './App';
import { main } from 'styles/themes';

ReactDOM.render(
  <ThemeProvider theme={main}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root')
);
