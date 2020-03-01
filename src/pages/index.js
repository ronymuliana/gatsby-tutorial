import React from "react"
import { Link } from "gatsby"
import Info from "../components/info"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import { Button } from "../components/Button"
import { FaApple } from "react-icons/fa"
import Dude from "../components/dude"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/products/">
      <h1>Products Page</h1>
    </Link>
    {/* <Info /> */}
    {/* <Link to="/images/">Go to images</Link> */}

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <FaApple className="icon" />
    {/* <Button>i'm from styled</Button> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    {/* <Link to="/products/testing/">Go to testing</Link> */}
  </Layout>
)

export default IndexPage
