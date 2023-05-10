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

function animation() {
	return `
  @keyframes bounce {
    0% {
	   opacity: 0;
      transform: translateY(30px);
    }
    75% {
		opacity: 75%;
      transform: translateY(-5x);
    }
    100% {
		opacity: 100%
      transform: translateY(0);
    }
  }
  animation: bounce .5s ease-in;
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
				fontColor: "black",
			},
			h1: {
				fontSize: "h1",
				fontWeight: "800",
				fontColor: "black",
			},
			h2: {
				fontSize: "h2",
				fontColor: "black",
			},
			h3: {
				fontSize: "h3",
				fontWeight: "800",
				fontColor: "black",
			},

			med: {
				fontSize: "medium",
				fontWeight: "800",
				fontColor: "black",
			},
		},
	})}
		${(props) => (props.animation ? animation() : "")};
`

export default Typography
