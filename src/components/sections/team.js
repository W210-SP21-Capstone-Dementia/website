import React from "react"
import styled from "styled-components"
import { Grid, Paper, Divider } from '@material-ui/core';

import { Container, Section } from "../global"

const Team = () => (
  <StyledSection id="team" style={{textAlign:'center'}}>
    <StyledContainer>
      <Title>Our Team</Title>
      <Grid container direction="column" spacing={6}>
        
        <Grid item>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <h4>Jacky Ma</h4>
              <p>Data Engineer</p>
            </Grid>
            <Grid item xs={6}>
              <h4 >James Wall</h4>
              <p>Project Manager</p>
            </Grid>
          </Grid>
        </Grid>


        <Grid item>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <h4>Michael Zeng</h4>
              <p>ML Engineer</p>
            </Grid>
            <Grid item xs={6}>
              <h4>Param Viswanathan</h4>
              <p>Cloud Architect</p>
            </Grid>
          </Grid>
        </Grid>


        <Grid item>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={3}/>
            <Grid item xs={6}>
              <h4>Surya Dutta</h4>
              <p>Designer / Data Scientist</p>
            </Grid>
            <Grid item xs={3}/>
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
            <Grid item xs={6}>
              <h4>Ram Balasubramanian</h4>
              <p>Chief Analytics Officer, Mantrah</p>
            </Grid>
            <Grid item xs={6}>
              <h4>Atreya Chaganty</h4>
              <p>Chief Executive Officer, Mantrah</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  </StyledSection>
)

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
  margin: 0 auto 32px;
  text-align: center;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`
