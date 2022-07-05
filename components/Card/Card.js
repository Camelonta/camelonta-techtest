import React from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import { StyledCard } from '../../styles/StyledCard';

import { cards } from '../../data';

const Card = ({card}) => {
  const {id, heading, text, icon} = card;

console.log('cards', cards)


  return(
    <>
    <StyledCard>

    <p><strong>id:</strong> {id}</p>
    <p><strong>heading:</strong> {heading}</p>
    <p><strong>text:</strong> {text}</p>
    <p><strong>icon:</strong> {icon}</p>
    <img src={`/icons/${icon}.svg`}/>
    
    <GlobalStyle />
    </StyledCard>

  </>
)};


export default Card;
