import Box from "../base-components/Box"
import Typography from "../base-components/Typography"
import Button from "../base-components/Button"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Nav() {
	const [navDropped, setNavDropped] = useState(false)
	const navDisplay = navDropped ? "grid" : "none"

	return (
		<Box
			width="100%"
			bg="green"
			display="flex"
			flexWrap="wrap"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			p={[".5rem", ".75rem", "1rem"]}
		>
			<Typography variant="h3">Nicholas Scott</Typography>
			<Typography
				display={["block", "block", "none"]}
				onClick={() => {
					setNavDropped(!navDropped)
				}}
				fontSize="2rem"
			>
				<FontAwesomeIcon icon="fa-solid fa-bars" />
			</Typography>
			<Box
				display={[navDisplay, navDisplay, "grid"]}
				gridTemplateColumns={["1fr", "1fr", "auto auto auto"]}
				gridColumnGap={[0, "1rem"]}
				width={["100%", "100%", "auto"]}
			>
				<Button variant="primary">Home</Button>
				<Button variant="primary">About</Button>
				<Button variant="primary">Projects</Button>
			</Box>
		</Box>
	)
}

export default Nav
