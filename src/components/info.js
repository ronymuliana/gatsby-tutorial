import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        title
        info
        description
        author
      }
    }
  }
`
export default () => (
  <StaticQuery
    query={getData}
    render={data => {
      const { title, info, description, author } = data.site.siteMetadata
      return (
        <>
          <h2>title: {title}</h2>
          <h2>info: {info}</h2>
          <p>description: {description}</p>
          <h2>author: {author}</h2>
        </>
      )
    }}
  />
)
