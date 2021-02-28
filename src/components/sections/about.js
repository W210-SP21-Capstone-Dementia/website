import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"
import { Grid } from '@material-ui/core';

import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const About = () => {

  const images = useStaticQuery(graphql`
  query {
    file(sourceInstanceName: { eq: "product" }, name: { eq: "monitor" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `); 

  return (
  <Section id="about">
    <StyledContainer>
      <Subtitle></Subtitle>
      <SectionTitle>About Dementia Monitor</SectionTitle>
        <Flex>
          <StyledImage fluid={images.file.childImageSharp.fluid} />
          <div style={{alignContent:'left'}}>
            <p>If your loved one is one of 50 million patients worldwide afflicted with dementia, you know just how hard it is to be a caregiver. Managing this disease can feel overwhelming, especially if you don't know how dementia is progressing in your patients.</p>
            <p>But it doesn't have to be this hard.</p>
            <p><b>We can help.</b></p>
            <p>Using cutting-edge machine learning algorithms and guidance from the world's leading experts in dementia and clinical psychology, Dementia Monitor allows caregivers to easily, reliably, and securely monitor the progression of their patients' dementia, from the comfort of their own homes.</p>
          </div>
        </Flex>
    </StyledContainer>
  </Section>
)}

export default About

const StyledContainer = styled(Container)`
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 100px 40px;
  text-align: center;
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`
const StyledImage = styled(Img)`
  width: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: ${props => props.theme.screen.sm}) {
    display:none;
  }
`