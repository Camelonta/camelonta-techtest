import React from "react"
import { StyledCard } from "../../styles/StyledCard"

const Card = (props) => {
  const { card } = props

  return (
    <StyledCard key={card.id}>
      <div>
        <img src={`/icons/${card.icon}.svg`} />
      </div>
      <div>
        <h4> {card.heading}</h4>
        <p>{card.text} </p>
      </div>
    </StyledCard>
  )
}

export default Card
