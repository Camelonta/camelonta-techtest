import styled from "styled-components"

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
}

export const CardsContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media ${devices.tablet} {
    width: 768px;
  }
  @media ${devices.desktop} {
    width: 1025px;
  }
`
