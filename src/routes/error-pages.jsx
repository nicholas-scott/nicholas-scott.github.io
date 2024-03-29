import { useRouteError } from "react-router-dom"
import Box from "../base-components/Box"

export function ErrorPage() {
	const error = useRouteError()

	return (
		<Box id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</Box>
	)
}
