import styled from "styled-components"

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
}

export const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 15px 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${devices.tablet} {
    width: 768px;
  }
  @media ${devices.desktop} {
    width: 1025px;
  }
`
