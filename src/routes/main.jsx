import Box from "../base-components/Box"
import Typography from "../base-components/Typography"
import { useState } from "react"

export function Main() {
	const [navDropped, setNavDropped] = useState(false)
	const navDisplay = navDropped ? "grid" : "none"

	return (
		<Box width="100%" bg="white" py="2rem" px="2rem">
			{/* <Typography animation={true} variant="giga">
				Nicholas Scott
			</Typography>
			<Typography animation={true} variant="mega">
				Software Developer
			</Typography> */}
			<Typography variant="med">
				You may be wondering why my personal website is titled
				theaddlepatedpaddlepuss. If you’re here it's probably because I
				have your attention and although my projects are probably the
				thing you're here to see, I want you to first read the poem
				titled: The Addle-Pated Paddlepuss. Here it is.
			</Typography>
			<Typography
				textAlign="center"
				width="50%"
				mx="auto"
				marginTop="5rem"
				variant="h3"
			>
				The Addle-pated Paddlepus <br></br> Jack Prelutsky<br></br>
			</Typography>
			<Typography
				textAlign="center"
				width="50%"
				mx="auto"
				marginBottom="5rem"
				variant="poem"
			>
				<br></br>The Addle-pated Paddlepuss is agile as a cat, <br></br>
				its neck is long and limber, and its face is broad and flat,{" "}
				<br></br>it moves with skill and vigor, with velocity and grace,{" "}
				<br></br>as it spends its every second playing Ping-Pong with
				its face. <br></br>
				<br></br>
				The Addle-pated Paddlepuss prevails in every game, <br></br>its
				opponent doesn't matter, the result is all the same, <br></br>
				with its supersonic smashes and its convoluted spins, <br></br>
				it demolishes all comers and invariably wins.<br></br>
				<br></br>
				The Addle-pated Paddlepuss, with its effervescent verve,
				<br></br>follows innovative volleys with a scintillating serve,
				<br></br>if you’re fond of playing ping-pong and would like to
				lose in style, <br></br>the Addle-pated Paddlepuss will serve
				you for a while
			</Typography>
			<Typography variant="med">
				I learned this poem in the third grade at the encouragement of
				my teacher for a public speaking contest. A couple of years
				later in middle school I found that I can still recite some of
				it which led me to re-learn it. I found it online in a book
				called "Worlds of Childhood: Art and Craft of Writting for
				Children" by William Zinsser. At the end of my undergrad I'd
				lookup the poem and found the book again, but this time I was
				curious enough to read it. The book goes into detail about
				various children's authors and their approach to their writting
				style. I was eager to get to the segment by Jack Prelutsky,
				enough to skip another author's less interesting section. My
				story with poem continues to expand to this day
				<br></br>
				<br></br> So what's the point of this homepage? This domain?
				Certainly not the fact that I got this domain name for free for
				a long time while working an internship and thought it'd be
				funny to name it so. The point is that this story stuck with me
				and brought me joy. I hope it can stick with you and bring you a
				little joy too.
			</Typography>
		</Box>
	)
}
