/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXPTypes, setMDXPType, useDeck } from "@mdxp/core"
import { HeaderLayout, Place } from "@mdxp/components"
import { ReactComponent as Logo } from "../assets/logo-text.svg"

// We set the footer with Place instead of the Footer argument of the HeaderLayout
// This is because we want content to be able to have content until the bottom of the page
// Our footer is in this case just "Floating" above
const MDXPHeaderLayout = ({ children, showSlideNum = true, sx = {} }) => {
  return (
    <HeaderLayout
      sxHeader={{
        bg: "MDXPYellow",
        color: "MDXPGray6",
        width: "100%",
        textAlign: "center",
        padding: "0",
        lineHeight: "160%",
      }}
      sx={sx}
    >
      {children}
    </HeaderLayout>
  )
}

export default setMDXPType(MDXPHeaderLayout, MDXPTypes.LAYOUT)
