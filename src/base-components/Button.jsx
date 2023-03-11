import styled from "styled-components"
import {
	color,
	typography,
	shadow,
	layout,
	space,
	variant,
} from "styled-system"

const Button = styled.button`
	 {
		fontfamily: "inherit";
	}
	${color}
	${typography}
    ${shadow}
    ${layout}
    ${space}
    ${variant({
		variants: {
			primary: {
				fontSize: "medium",
				fontWeight: "normal",
				bg: "white",
				border: "none",
				p: "1rem",
			},
		},
	})}
`

export default Button
