import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const About = () => (
  <Section id="about">
    <StyledContainer>
      <Subtitle></Subtitle>
      <SectionTitle>About DemensTrac</SectionTitle>
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
