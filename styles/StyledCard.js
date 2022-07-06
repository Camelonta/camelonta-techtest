import styled from "styled-components";


// DEVICES //
export const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)"
}


export const Container = styled.section`
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

export const StyledCard = styled.div`
    padding: 1rem 2rem;
    background-color: #136744;
    margin-bottom: 1rem;
    color: white;

    h4 {
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
    }
    p {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }
    img {
        border: 1px solid white;
        border-radius: 50%;
        padding: 8px;
        max-width: 40px;
    }
`
