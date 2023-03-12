import styled from "styled-components"
import {
	typography,
	shadow,
	color,
	layout,
	space,
	variant,
} from "styled-system"

const hover = () => {
	return `
  :hover{
    filter: drop-shadow(3px 3px 1px #861212) drop-shadow(4px 4px 1px #6bccf8);
    transition: drop-shadow 2s;
  }
  `
}

const Typography = styled.p`
	${color} ${typography} ${shadow} ${layout} ${space}
		${variant({
		variants: {
			giga: { fontSize: "giga", fontWeight: "800" },
			mega: {
				fontSize: "mega",
				fontWeight: "800",
			},
			h1: {
				fontSize: "h1",
				fontWeight: "800",
			},
			h2: {
				fontSize: "h2",
			},
			h3: {
				fontSize: "h3",
				fontWeight: "800",
			},
			nav: {
				fontSize: "medium",
				fontWeight: "800",
			},
		},
	})}
		${(props) => (props.hover ? hover() : "")};
`

export default Typography
