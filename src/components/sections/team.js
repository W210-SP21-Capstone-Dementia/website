import React from "react"
import styled from "styled-components"
import { Grid, Paper, Divider } from '@material-ui/core';
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Container, Section } from "../global"

const Team = () => {
  
  const images = useStaticQuery(graphql`

    query {
      jackie:file(sourceInstanceName: { eq: "persons" }, name: { eq: "jackie" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      james:file(sourceInstanceName: { eq: "persons" }, name: { eq: "james" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      michael:file(sourceInstanceName: { eq: "persons" }, name: { eq: "michael" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      param:file(sourceInstanceName: { eq: "persons" }, name: { eq: "param" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      surya:file(sourceInstanceName: { eq: "persons" }, name: { eq: "surya" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
  <StyledSection id="team" style={{textAlign:'center'}}>
    <StyledContainer>
      <Title>Our Team</Title>
      <Grid container direction="column" spacing={6}>
        
        <Grid item>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={2}/>
            <Grid item xs={4}>
              <StyledImage fluid={images.jackie.childImageSharp.fluid} />
              <h4>Jacky Ma</h4>
              <p style={{marginTop:-20}}>Data Engineer</p>
              <a href="https://github.com/jjm011" target="_blank">
                <GitHubIcon fontSize="large" style={{ margin: 10, color:"black" }} />
              </a>
              <a href="https://www.linkedin.com/in/junjiema522/" target="_blank">
                <LinkedInIcon fontSize="large" style={{ margin: 10, color:"#2867b2" }} />
              </a>
            </Grid>
            <Grid item xs={4}>
              <StyledImage fluid={images.james.childImageSharp.fluid} />
              <h4 >James Wall</h4>
              <p style={{marginTop:-20}}>Project Manager</p>
              <a href="https://github.com/james-wall" target="_blank">
                <GitHubIcon fontSize="large" style={{ margin: 10, color:"black" }} />
              </a>
              <a href="https://www.linkedin.com/in/jamespwall/" target="_blank">
                <LinkedInIcon fontSize="large" style={{ margin: 10, color:"#2867b2" }} />
              </a>
            </Grid>
            <Grid item xs={2}/>
          </Grid>
        </Grid>


        <Grid item>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={2}/>
            <Grid item xs={4}>
              <StyledImage fluid={images.michael.childImageSharp.fluid} />
              <h4>Michael Zeng</h4>
              <p style={{marginTop:-20}}>ML Engineer</p>
              <a href="https://github.com/zengm71" target="_blank">
                <GitHubIcon fontSize="large" style={{ margin: 10, color:"black" }} />
              </a>
              <a href="https://www.linkedin.com/in/miaozeng/" target="_blank">
                <LinkedInIcon fontSize="large" style={{ margin: 10, color:"#2867b2" }} />
              </a>
            </Grid>
            <Grid item xs={4}>
              <StyledImage fluid={images.param.childImageSharp.fluid} />
              <h4>Param Viswanathan</h4>
              <p style={{marginTop:-20}}>Cloud Architect</p>
              <a href="https://github.com/pviswana" target="_blank">
                <GitHubIcon fontSize="large" style={{ margin: 10, color:"black" }} />
              </a>
              <a href="https://www.linkedin.com/in/param-viswanathan-29812a" target="_blank">
                <LinkedInIcon fontSize="large" style={{ margin: 10, color:"#2867b2" }} />
              </a>
            </Grid>
            <Grid item xs={2}/>
          </Grid>
        </Grid>


        <Grid item>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={4}/>
            <Grid item xs={4}>
              <StyledImage fluid={images.surya.childImageSharp.fluid} />
              <h4>Surya Dutta</h4>
              <p style={{marginTop:-20}}>Data Scientist / Designer</p>
              <a href="https://github.com/suryadutta" target="_blank">
                <GitHubIcon fontSize="large" style={{ margin: 10, color:"black" }} />
              </a>
              <a href="https://www.linkedin.com/in/suryadutta" target="_blank">
                <LinkedInIcon fontSize="large" style={{ margin: 10, color:"#2867b2" }} />
              </a>
            </Grid>
            <Grid item xs={4}/>
          </Grid>
        </Grid>

      </Grid>
    </StyledContainer>
    <Divider variant="middle"/>
    <StyledContainer>
      <Title>Our Advisors</Title>
      <Grid container direction="column" spacing={6}>
        
        <Grid item>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={1}/>
            <Grid item xs={5}>
              <h4>Ram Balasubramanian</h4>
              <p>Chief Analytics Officer, Mantrah</p>
            </Grid>
            <Grid item xs={5}>
              <h4>Atreya Chaganty</h4>
              <p>Chief Executive Officer, Mantrah</p>
            </Grid>
            <Grid item xs={1}/>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  </StyledSection>
)}

export default Team

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0% 7%, 100% 0%, 100% 100%, 0% 100%);
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const Title = styled.h3`
  margin: 0 auto 68px;
  text-align: center;
`
const StyledImage = styled(Img)`
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height:200px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100px;
    height: 100px;
  }
`