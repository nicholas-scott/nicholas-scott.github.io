import Box from "../base-components/Box"
import Typography from "../base-components/Typography"
import Button from "../base-components/Button"

function Nav() {
	return (
		<Box
			width="100%"
			bg="green"
			display="flex"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			p="1rem"
		>
			<Typography variant="h3">Nicholas Scott</Typography>
			<Box
				display="grid"
				gridTemplateColumns="auto auto auto"
				gridColumnGap="1rem"
				width="auto"
			>
				<Button variant="primary">Home</Button>
				<Button variant="primary">About</Button>
				<Button variant="primary">Projects</Button>
			</Box>
		</Box>
	)
}

export default Nav
