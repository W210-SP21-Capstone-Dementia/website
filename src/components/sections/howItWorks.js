import React from "react"
import styled from "styled-components"
import { Grid, Paper } from '@material-ui/core';

import { Container, Section } from "../global"

const HowItWorks = () => {
  
  return (
  <StyledSection id="howitworks">
    <StyledContainer>
      <Title>How It Works</Title>
      <Grid container spacing={3}>
        <Grid item xs={4}>
            <h4 style={{textAlign:'center'}}>Step 1</h4>
        </Grid>
        <Grid item xs={4}>
            <h4 style={{textAlign:'center'}}>Step 2</h4>
        </Grid>
        <Grid item xs={4}>
            <h4 style={{textAlign:'center'}}>Step 3</h4>
        </Grid>
      </Grid>
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
