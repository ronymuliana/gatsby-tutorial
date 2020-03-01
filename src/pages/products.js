import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function products({ data }) {
  return (
    <Layout>
      <Link to="/">Back to home</Link>
      <h1>Our products</h1>
      {data.products.edges.map(({ node: product }) => {
        return (
          <div key={product.id} style={{ padding: "1rem", margin: "1rem 0" }}>
            <Img fixed={product.image.fixed} />
            <h3 style={{ marginBottom: "0.5rem" }}>
              {product.title}
              <span style={{ color: "orange", marginLeft: "3rem" }}>
                ${product.price}
              </span>
            </h3>
            {/* <p>{product.description.description}</p> */}
            <Link to={`/products/${product.title}`}>
              <h2>Details</h2>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          image {
            fixed(width: 300) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
