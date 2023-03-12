import Box from "../base-components/Box"
import Typography from "../base-components/Typography"
import Button from "../base-components/Button"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Nav() {
	const [navDropped, setNavDropped] = useState(false)
	const navDisplay = navDropped ? "grid" : "none"
	// Onclick, the buttons will route to the appropriate page
	return (
		<Box
			width="100%"
			bg="grey"
			display="flex"
			flexWrap="wrap"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			p={[".5rem", ".75rem", "1rem"]}
		>
			<Typography variant="h3">My spot on the internet</Typography>
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
				as="ul"
			>
				<Typography variant="nav" as="li">
					<Link to={`/`}>Home</Link>
				</Typography>
				<Typography variant="nav" as="li">
					<Link to={`/about`}>About</Link>
				</Typography>
				<Typography variant="nav" as="li">
					<Link to={`/projects`}>Projects</Link>
				</Typography>
			</Box>
		</Box>
	)
}

export default Nav
