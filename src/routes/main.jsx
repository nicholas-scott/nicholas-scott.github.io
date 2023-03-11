import Box from "../base-components/Box"
import Typography from "../base-components/Typography"
import { useState } from "react"

export function Main() {
	const [navDropped, setNavDropped] = useState(false)
	const navDisplay = navDropped ? "grid" : "none"

	return (
		<Box width="100%" py="10rem" bg="yellow" px="4rem">
			<Typography variant="giga">Big Name</Typography>
			<Typography variant="mega">Slightly Smaller Title</Typography>
		</Box>
	)
}
