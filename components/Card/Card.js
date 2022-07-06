import React from "react"
import { StyledCard } from "../../styles/StyledCard"

const Card = (props) => {
  const { card } = props

  return (
    <StyledCard key={card.id}>
      <img src={`/icons/${card.icon}.svg`} />
      <h4> {card.heading}</h4>
      <p>{card.text} </p>
    </StyledCard>
  )
}

export default Card
