import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { StyledCard } from "../../styles/StyledCard";
import { Container } from "../../styles/StyledCard";

const Card = (props) => {
  const { card } = props;

  return (
    <Container>
      <StyledCard key={card.id}>
        <img src={`/icons/${card.icon}.svg`} />
        <h4> {card.heading}</h4>
        <p>{card.text} </p>
      </StyledCard>

      <GlobalStyle />
    </Container>
  );
};

export default Card;
