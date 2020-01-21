import React from "react"
// import { Link } from "gatsby"
//scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"
// components
import Header from "../components/header"
import Banner from "../components/banner"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  )
}

export default IndexPage
