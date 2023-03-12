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
      
      transform: translateY(20px);
    }
    75% {
      visibility: visible;
      transform: translateY(-5px);
    }
    100% {
      visibility: visible;
      transform: translateY(0);
    }
  }
  animation: bounce .25s linear;
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
