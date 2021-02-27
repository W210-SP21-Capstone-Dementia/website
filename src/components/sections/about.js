import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"
import { Grid } from '@material-ui/core';

import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import useWindowDimensions from "../dimensions";

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

  const { height, width } = useWindowDimensions();

  return (
  <Section id="about">
    <StyledContainer>
      <Subtitle></Subtitle>
      <SectionTitle>About Dementia Monitor</SectionTitle>

      {width > 800 ? <Grid container spacing={3} style={{alignItems:'center'}}>
        <Grid item xs={1}/>
        <Grid item xs={3}>
          <StyledImage fluid={images.file.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={6}>
            <p>Today, around 50 million patients suffer from dementia worldwide. Caregiving for these patients is exhausting, time-consuming, and expensive - yet despite how widespread this problem is, there is no good solution for tracking how far a patient's dementia has progressed.</p>
            
            <p> Until now.</p>
              
            <p>We're using cutting-edge machine learning algorithms and guidance from the world's leading experts in dementia and clinical psychology, to create a product that allows caregivers to easily, reliably, and securely monitor the progression of their patients' dementia, from the comfort of their own homes.</p>
        </Grid>
        <Grid item xs={1}/>
      </Grid> : 
      <div>
         <p>Today, around 50 million patients suffer from dementia worldwide. Caregiving for these patients is exhausting, time-consuming, and expensive - yet despite how widespread this problem is, there is no good solution for tracking how far a patient's dementia has progressed.</p>
            
          <p> Until now.</p>
            
          <p>We're using cutting-edge machine learning algorithms and guidance from the world's leading experts in dementia and clinical psychology, to create a product that allows caregivers to easily, reliably, and securely monitor the progression of their patients' dementia, from the comfort of their own homes.</p>
      </div>}

      
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

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`
const StyledImage = styled(Img)`
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`