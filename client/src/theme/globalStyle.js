import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
  }
`

const theme = {
  lightBlue: '#E2EBF0',
  darkBlue: '#273251'
}

export { GlobalStyle, theme }

// #E2EBF0 light background ?
// #9EB2CC
// #769699
// #8F8C9B
// #273251 dark blue font
