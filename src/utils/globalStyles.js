import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --headerFont: 'Oswald', Arial, Helvetica, sans-serif;
    --bodyFont: 'Lato', Arial, Helvetica, sans-serif;
  }
  
  * {
    margin: 0;
    box-sizing: border-box;
  }

  p {
    padding: 10px 0;
  }

  body {
    font-family: var(--bodyFont);
  }

  h1 {
    font-family: var(--headerFont);
  }
`

export default GlobalStyles
