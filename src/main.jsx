import React from "react"
import ReactDOM from "react-dom/client"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import App from "./App"
import "./index.css"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    height: 100%;
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 300;
    font-size: 16px;
    
  }
`

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
