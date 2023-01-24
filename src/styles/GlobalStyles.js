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
    /* min-height: 100vh;  */
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
 .container-main {
    max-width: 90%;
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









.dropdown-list-multiselect {
  position: relative;
  display: inline-block;
}

.dropdown-list-multiselect__selected-options {
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 5px;
}

.dropdown-list-multiselect__selected-option {
  display: inline-block;
  margin-right: 5px;
  padding: 3px;
  background-color: #ccc;
}

.dropdown-list-multiselect__remove-button {
  cursor: pointer;
  margin-left: 5px;
  padding: 2px;
  border: none;
  background-color: transparent;
}

.dropdown-list-multiselect__options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  padding: 5px;
  background-color: #fff;
  z-index: 1;
}

.dropdown-list-multiselect__option {
  cursor: pointer;
  padding: 5px;
}

.dropdown-list-multiselect__option.selected {
  background-color: #ccc;
}


`
export default GlobalStyles
