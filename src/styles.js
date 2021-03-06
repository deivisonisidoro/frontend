import{createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

  body{
    font-family: Arial, Helvetica, sans-serif;
    background: #E2E4E1;
    color: #364147;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;  
  }
  html, body, #root{
    height: 100%;
  }
`;

