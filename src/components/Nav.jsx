import Box from "../base-components/Box"
import Typography from "../base-components/Typography"
import Button from "../base-components/Button"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { ListItem } from "../base-components/ListItem"

function Nav() {
	const [navDropped, setNavDropped] = useState(false)
	const navDisplay = navDropped ? "grid" : "none"
	// Onclick, the buttons will route to the appropriate page
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
				as="ul"
			>
				<ListItem>
					<Link to={`/`}>Home</Link>
				</ListItem>
				<ListItem>
					<Link to={`/about`}>About</Link>
				</ListItem>
				<ListItem>
					<Link to={`/projects`}>Projects</Link>
				</ListItem>
			</Box>
		</Box>
	)
}

export default Nav
