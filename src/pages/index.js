import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import About from "../components/sections/about"
import HowItWorks from "../components/sections/howItWorks"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Team from "../components/sections/team"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <About />
    <HowItWorks />
    <Features />
    <Team />
    <Footer />
  </Layout>
)

export default IndexPage
