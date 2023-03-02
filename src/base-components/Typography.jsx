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
  ${color}
  ${typography}
  ${shadow}
  ${layout}
  ${space}
  ${variant({
    variants: {
      giga: { fontSize: "max(3.5vmax, 3rem)", fontWeight: "800" },
      mega: {
        fontSize: "max(1.75vmax, 2rem)",
        fontWeight: "800",
      },
      h1: {
        fontSize: "2rem",
        fontWeight: "800",
      },
      h2: {
        fontSize: "1.75rem",
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: "800",
      },
    },
  })}
  ${(props) => (props.hover ? hover() : "")}
`

export default Typography
