import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { Container, Section } from "../global"

const HowItWorks = () => {



  const theme = createMuiTheme({
    overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: '#735D78',
        },
        '&$active': {
          color: '#735D78',
        },
      },
      active: {},
      completed: {},
    }
  }});

  const screenshots = useStaticQuery(graphql`

    query {
      one:file(sourceInstanceName: { eq: "screenshots" }, name: { eq: "1" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two:file(sourceInstanceName: { eq: "screenshots" }, name: { eq: "2" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three:file(sourceInstanceName: { eq: "screenshots" }, name: { eq: "3" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }

  `);

  const steps = ['Picture Description Task', 'Instantaneous Estimate', 'Longitudinal Tracking'];

  const images = [
    screenshots.one.childImageSharp.fluid,
    screenshots.two.childImageSharp.fluid,
    screenshots.three.childImageSharp.fluid
  ]

  const descriptions = [
    <p>We utilize a picture prompt commonly used for aphasia detection called the Cookie Theft Picture Task. <br/><br/>The app will guide the caregiver through the process of administering the test, in which the patient will describe the picture for about two minutes and record their response.</p>,
    <p>The recording will be sent to our deep learning inference pipeline. <br/><br/>Our ensemble of models will immediately analyze the patient's response and speech patterns, and return an estimated cognition score within 10 seconds.</p>,
    <p>The patient, caregivers, and clinicians will be able to review the patient's cognitive score history to determine trends and identify proximal data like medication adherence and exercise.<br/><br/>Combined, this will help caregivers and clinicians adjust the patient's treatment plan and give suitable interventions.</p>
  ]

  const [activeStep, setActiveStep] = React.useState(0);   
  
  let handleNext = () => {
    setActiveStep(activeStep+1);
  }

  let handleBack = () => {
    setActiveStep(activeStep-1);
  }

  return (
  <StyledSection id="howitworks">
    <StyledContainer>
      <Title>How It Works</Title>

        <ThemeProvider theme={theme}>
          <Flex>
            <Paper elevation={2}>
              <StyledImage fluid={images[activeStep]} loading="eager"/>
            </Paper>
        
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    {descriptions[index]}
                    <div>
                      <div>
                      {activeStep === 0 ? null : 
                          <StyledButton
                            onClick={handleBack}
                            style={{
                              fontSize:12,
                            }}
                          >
                            Back
                          </StyledButton>
                        }

                        {activeStep === steps.length - 1 ? null : 
                          <StyledButton
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          style={{
                            backgroundColor:"#735D78",
                            fontSize:12,
                          }}
                        >
                          Next
                        </StyledButton>
                        }

                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>

          </Flex>
        </ThemeProvider>
    </StyledContainer>
  </StyledSection>
)}

export default HowItWorks

const StyledSection = styled(Section)`
  
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const Title = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const Flex = styled.div`
  margin: 50px;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const StyledImage = styled(Img)`
  width: 600px;
  height: 450px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const StyledButton = styled(Button)`
`