import styled from "styled-components"

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
}

export const Container = styled.div`
  width: 375px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${devices.tablet} {
    width: 768px;
    margin: 20px;
  }
  @media ${devices.desktop} {
    width: 1025px;
    margin: 20px;
  }
`
