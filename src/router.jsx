import { createBrowserRouter } from "react-router-dom"
import { Contact, Main, Projects, Root, ErrorPage } from "./routes"

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
			{
				path: "/projects",
				element: <Projects />,
			},
		],
	},
])

export default router
