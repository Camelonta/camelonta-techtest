import styled from "styled-components"

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
}

export const CardsContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    width: 768px;
    flex-direction: row;
  }
  @media ${devices.desktop} {
    width: 1025px;
    flex-direction: row;
  }
`

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  padding: 2rem 1rem 0 0;

  h4 {
    font-size: 16px;
    line-height: 14px;
    font-weight: 700;
    margin-block-end: 0px;
    margin-block-start: 0px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
  }

  img {
    border: 1px solid white;
    border-radius: 50%;
    padding: 10px;
    height: 50px;
    width: 50px;
    margin-right: 20px;
  }

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem 0 0;
  }

  img {
    border: 1px solid white;
    border-radius: 50%;
    padding: 10px;
    height: 50px;
    width: 50px;
    margin-bottom: 14px;
  }

  @media ${devices.desktop} {
    padding: 2rem 1rem 0 0;
    background-color: #136744;
    margin-bottom: 1rem;
    color: white;
    flex-direction: column;

    h4 {
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      max-width: 17em;
    }
    img {
      border: 1px solid white;
      border-radius: 50%;
      padding: 10px;
      height: 46px;
      width: 46px;
    }
  }
`
