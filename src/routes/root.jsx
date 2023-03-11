import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Box from "../base-components/Box"

export function Root() {
	return (
		<Box
			width="100%"
			bg="red"
			display="flex"
			flexDirection="column"
			alignItems="center"
			height="100vh"
		>
			<Box width="100%" maxWidth="large">
				<Nav />
				<Outlet />
			</Box>
		</Box>
	)
}
