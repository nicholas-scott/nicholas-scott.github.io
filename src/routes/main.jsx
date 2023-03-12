import Box from "../base-components/Box"
import Typography from "../base-components/Typography"
import { useState } from "react"

export function Main() {
	const [navDropped, setNavDropped] = useState(false)
	const navDisplay = navDropped ? "grid" : "none"

	return (
		<Box width="100%" bg="yellow" py="10rem" px="">
			<Typography variant="giga">Nicholas Scott</Typography>
			<Typography variant="mega">Software Developer</Typography>
		</Box>
	)
}
