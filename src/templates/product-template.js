import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function({ data }) {
  const { title, price } = data.contentfulProduct
  const { description } = data.contentfulProduct.description
  const { fluid } = data.contentfulProduct.image
  return (
    <Layout>
      <h1 style={{ color: "red" }}>Single Product Template</h1>
      <Img fluid={fluid} />
      <h1>
        {title}
        <span style={{ marginLeft: "3rem", color: "orange" }}>${price}</span>
      </h1>
      <p>{description}</p>
      <Link to="/products/">
        <h2>Back to Products</h2>
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      id
      title
      price
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
