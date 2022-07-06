import React from "react"
import { StyledCard, Container } from "../../styles/StyledCard"

const Card = (props) => {
  const { card } = props

  return (
    <Container>
      <StyledCard key={card.id}>
        <img src={`/icons/${card.icon}.svg`} />
        <h4> {card.heading}</h4>
        <p>{card.text} </p>
      </StyledCard>
    </Container>
  )
}

export default Card
