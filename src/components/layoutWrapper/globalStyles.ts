import { createGlobalStyle, theme } from '@style';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
    min-width: 280px;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.pageBackground};
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.primary.gradient2} ${theme.colors.pageBackground};
  }

  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-track {
    background: ${theme.colors.pageBackground};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary.gradient2};
    border-radius: 6px;
    border: 1px solid ${theme.colors.pageBackground};
  }

  input,
  textarea {
    font-family: Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
