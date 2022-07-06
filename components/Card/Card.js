import React from 'react'
import GlobalStyle from '../../styles/GlobalStyle'
import { StyledCard } from '../../styles/StyledCard'
import { Container } from '../../styles/StyledCard';

import { cards } from '../../data';

const Card = () => {
 
  console.log('cards', cards)

  return(

<Container>
  
{cards.map((item) => (
<StyledCard key={item.id}>
  <img src={`/icons/${item.icon}.svg`}/>
   <h4> {item.heading}</h4>
    <p>{item.text} </p>
  </StyledCard>
             ))}

    
    <GlobalStyle />

    </Container>

)}


export default Card
