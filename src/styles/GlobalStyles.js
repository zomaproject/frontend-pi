import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  /* Hacer 1 rem a 10px */
  


  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 2;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.fg};
  }
  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
 .container {
    max-width: 120rem;
    margin: 0 auto;
 }
 h1,h3,h4,h5,h6 {
    text-align: center;
 }
 h1{
    font-size: 3rem;
 }
 h2{
    font-size: 2rem;
 }
 h3{
    font-size: 1.5rem;
 }
`
export default GlobalStyles
