import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --headerFont: 'Oswald', Arial, Helvetica, sans-serif;
    --bodyFont: 'Lato', Arial, Helvetica, sans-serif;
  }
  
  body {
    font-family: var(--bodyFont);
  }

  h1 {
    font-family: var(--headerFont);
  }
`

export default GlobalStyles
