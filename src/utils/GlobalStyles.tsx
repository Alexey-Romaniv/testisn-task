import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
  img {
    display: block;
    max-width: 100%;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${p => p.theme.fonts.titleFont};
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
    color: ${p => p.theme.colors.mainText};
  }
  a {
    text-decoration: none;
  }
  button {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  body {
    background-color: ${p => p.theme.colors.mainBackground};
    color: ${p => p.theme.colors.mainText};
    font-family: ${p => p.theme.fonts.mainFont}, sans-serif;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.03em;
  }
`