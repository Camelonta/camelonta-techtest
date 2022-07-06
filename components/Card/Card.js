import React from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import { StyledCard } from '../../styles/StyledCard';

import { cards } from '../../data';

const Card = () => {
 

  return(
    <>

{cards.map((item) => (
            <StyledCard
              key={item.id}
              icon={item.icon}
              text={item.text}
              />

             ))}

    {/* <StyledCard> */}
    {/* <p><strong>id:</strong> {id}</p>
    <p><strong>heading:</strong> {heading}</p>
    <p><strong>text:</strong> {text}</p>
    <p><strong>icon:</strong> {icon}</p>
    <img src={`/icons/${icon}.svg`}/> */}
    
    <GlobalStyle />
    {/* </StyledCard> */}

  </>
)};


export default Card
