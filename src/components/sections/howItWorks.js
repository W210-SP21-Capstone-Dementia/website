import React from "react"
import styled from "styled-components"
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { Container, Section } from "../global"

const HowItWorks = () => {

  function getSteps() {
    return ['Enter Demographic Data', 'Record Response', 'Receive Score'];
  }

  const steps = getSteps();

  const [activeStep, setActiveStep] = React.useState(0);   
  
  return (
  <StyledSection id="howitworks">
    <StyledContainer>
      <Title>How It Works</Title>
      <Stepper activeStep={activeStep} alternativeLabel style={{width:'80%'}}>
        {steps.map((label, index) => {
          return (
            <Step key={label} onClick={()=>{setActiveStep(index)}}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
    </StyledContainer>
  </StyledSection>
)}

export default HowItWorks

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0% 14%, 100% 0%, 100% 100%, 0% 86%);
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

