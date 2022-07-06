import styled from "styled-components"

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
}

export const Container = styled.div`
  width: 375px;
  margin: 0 auto;

  @media ${devices.tablet} {
    width: 768px;
  }
  @media ${devices.desktop} {
    width: 1025px;
  }
`
