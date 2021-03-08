import React from "react"
import styled from "styled-components"
import { Grid, Divider } from '@material-ui/core';

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <BrandContainer>
      <Logo>Cognition Tracker</Logo>
      <Divider orientation="vertical" flexItem/>
      <Copyright>&copy; 2021</Copyright>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 10px 0 0;
  padding: 0 0 40px;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin-right:10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const Copyright = styled.div`
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin-left: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`

export default Footer
