import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"
import { Grid } from '@material-ui/core';

const About = () => (
  <Section id="about">
    <StyledContainer>
      <Subtitle></Subtitle>
      <SectionTitle>About DemensTrac</SectionTitle>
      <Grid container spacing={3}>
        <Grid item xs={1}/>
        <Grid item xs={5}>

        </Grid>
        <Grid item xs={5}>
            <p>Today, around 50 million patients suffer from dementia worldwide. Caregiving for these patients is exhausting, time-consuming, and expensive - yet despite how widespread this problem is, there is no good solution for tracking how far a patient's dementia has progressed.</p>
            
            <p> Until now.</p>
              
            <p>We're using cutting-edge machine learning algorithms and guidance from the world's leading experts in dementia and clinical psychology, we have created a product that allows caregivers to easily, reliably, and securely monitor the progression of their patients' dementia, from the comfort of their own homes.</p>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
    </StyledContainer>
  </Section>
)

export default About

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`
