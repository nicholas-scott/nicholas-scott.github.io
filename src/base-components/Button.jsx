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
	${color}
	${typography}
    ${shadow}
    ${layout}
    ${space}
    ${variant({
		variants: {
			primary: {
				bg: "primary",
				color: "white",
				fontSize: "1.5rem",
				fontWeight: "800",
				borderRadius: "0.5rem",
				padding: "0.5rem 1rem",
				border: "none",
				boxShadow: "0 0 0 0.5px #000000",
				cursor: "pointer",
			},
		},
	})}
`

export default Button
