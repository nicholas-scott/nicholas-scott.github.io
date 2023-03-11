import React from "react"
import ReactDOM from "react-dom/client"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import theme from "./theme"
import router from "./router"

library.add(faBars)

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html{
	
  }
  body {
    height: 100%;
    font-family: "Nanum Gothic", sans-serif;
	font-size: 16px;
    
  }
`

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
)
