/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXPTypes, setMDXPType } from "@mdxp/core"
import { BlankLayout, Place } from "@mdxp/components"

const MDXPTitleLayout = ({ subtitle = "" }) => {
  return (
    <BlankLayout
      sx={{
        variant: "gradient.light",
        "& svg": {
          width: "60%",
          height: "auto",
        },
      }}
    >
      <Place top="10%" sx={{ width: "80%", textAlign: "center" }}>
        <Styled.h1 sx={{ borderBottom: "2px solid black" }}>
          MongoDB <span style={{ fontSize: "65%" }}>[mon-go-dee-bee]</span>
        </Styled.h1>
        <Styled.p style={{ textAlign: "left" }}>
          <em>noun</em>
          <ol>
            <li>
              A document-oriented database management system that uses JSON-like
              documents with dynamic schemas (MongoDB calls the format BSON),
              simplifying the integration of data in content-driven
              applications.
            </li>
            <li>The best database in the world!</li>
          </ol>
        </Styled.p>
      </Place>
    </BlankLayout>
  )
}

export default setMDXPType(MDXPTitleLayout, MDXPTypes.LAYOUT)
