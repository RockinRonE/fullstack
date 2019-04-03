import React, { Component } from 'react'
import styled from 'styled-components'
import backgroundImg from '../theme/images/hero-background.jpg'

const Wrapper = styled.div`
  height: 10vh;
  /* background-image: url(${backgroundImg}); */
  /* background: linear-gradient(to right bottom, blue, green); */
  /* background-color: ${props => props.theme.darkBlue}; */
  background-color: ${props => props.theme.lightBlue};
  display: flex;
  align-items: center;
  justify-content: flex-end;

`

const NavWrapper = styled.nav`
  display: flex;
`

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <NavWrapper>
          <a href="/auth/google">Sign In With Google</a>
        </NavWrapper>
      </Wrapper>
    )
  }
}

export default Header
