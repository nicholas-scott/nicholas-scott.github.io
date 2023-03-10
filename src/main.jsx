import React from "react"
import ReactDOM from "react-dom/client"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import theme from "./theme"
import { Root } from "./routes/root"
import ErrorPage from "./routes/error-pages"
import { Contact } from "./routes/contact"
import Hero from "./routes/main"
import Main from "./routes/main"
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/",
				element: <Main />,
			},
		],
	},
])

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
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
)
