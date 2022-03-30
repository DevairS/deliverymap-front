import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background: ${({ theme }) => theme.background};
  }
  input, button {
    font-family: 'Open Sans', sans-serif;
  }
  button {
    cursor: pointer;
  }
  div {
    display: flex;
  }
`;
