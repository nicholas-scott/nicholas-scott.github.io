import { createBrowserRouter } from "react-router-dom"
import { Main, Projects, Root, ErrorPage, About } from "./routes"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
		],
	},
])

export default router
