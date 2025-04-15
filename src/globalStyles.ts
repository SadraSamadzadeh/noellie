import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Winky Rough', sans-serif;
    transition: all 0.3s ease;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
