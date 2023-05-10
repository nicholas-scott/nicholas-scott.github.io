import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Box from "../base-components/Box"

export function Root() {
	return (
		<Box
			width="100%"
			bg="white"
			display="flex"
			flexDirection="column"
			alignItems="center"
			height="100vh"
		>
			<Nav width="100%" display="flex" justifyContent="center" />
			<Box width="100%" maxWidth="large">
				<Outlet />
			</Box>
		</Box>
	)
}
