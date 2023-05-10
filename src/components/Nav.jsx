import Box from "../base-components/Box"
import Typography from "../base-components/Typography"
import Button from "../base-components/Button"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Nav(props) {
	const [navDropped, setNavDropped] = useState(false)
	const navDisplay = navDropped ? "flex" : "none"
	// Onclick, the buttons will route to the appropriate page
	return (
		<Box {...props} borderBottom="1px solid">
			<Box
				width="100%"
				maxWidth="extraLarge"
				display="flex"
				flexWrap="wrap"
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				p={[".5rem", ".75rem", "1rem"]}
				alignSelf="center"
			>
				<Typography variant="h3">Hi!</Typography>
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
					alignItems="center"
					flexDirection={["column", "column", "row"]}
				>
					<Typography variant="med" as="li">
						<Link to={`/`}>Home</Link>
					</Typography>
					<Typography variant="med" as="li">
						<Link to={`/about`}>About</Link>
					</Typography>
					<Typography variant="med" as="li">
						<Link to={`/projects`}>Projects</Link>
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default Nav
