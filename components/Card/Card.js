import React from 'react'
import GlobalStyle from '../../styles/GlobalStyle'
import { StyledCard } from '../../styles/StyledCard'

import { cards } from '../../data';

const Card = () => {
 
  console.log('cards', cards)

  return(
    <>

{cards.map((item) => (
<StyledCard key={item.id}>
<img src={`/icons/${item.icons}.svg`}/>
    <p>Icon: {item.icon}</p>
   <h4> {item.heading}</h4>
    <p>{item.text} </p>
  </StyledCard>


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
)}


export default Card
