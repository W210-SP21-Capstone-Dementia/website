import React from "react"
import styled from "styled-components"
import { Section, Container } from "../global"
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import TimerIcon from '@material-ui/icons/Timer';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LockIcon from '@material-ui/icons/Lock';

const Features = () => (
  <StyledSection id="features">
    <StyledContainer>
      <SectionTitle>Features</SectionTitle>
      <br/><br/>
      <FeaturesGrid>
        <FeatureItem>
          <ThumbUpIcon style={{ fontSize: 40 }} />
          <FeatureTitle>Easy to Use</FeatureTitle>
          <FeatureText>
            Our application will guide you step-by-step through the entire process.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <LocationSearchingIcon style={{ fontSize: 40 }} />
          <FeatureTitle>Accurate</FeatureTitle>
          <FeatureText>
            Our speech-based ML algorithms have achieved world-leading performance.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <TimerIcon style={{ fontSize: 40 }} />
          <FeatureTitle>Instant Results</FeatureTitle>
          <FeatureText>
            Once the recording is complete, you'll get your score within seconds.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <LockIcon style={{ fontSize: 40 }} />
          <FeatureTitle>Secure</FeatureTitle>
          <FeatureText>
            We take every precaution to keep all of your data safe.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </StyledSection>
)

export default Features

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0% 14%, 100% 0%, 100% 100%, 0% 86%);
`

const StyledContainer = styled(Container)`
  margin:100px;
`

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

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 50px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
