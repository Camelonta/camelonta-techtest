import React from 'react';
import styles from './styles.module.css';

const Card = ({card}) => {
  const {id, heading, text, icon} = card;
  return(
  <div className={styles.card}>
    <p><strong>id:</strong> {id}</p>
    <p><strong>heading:</strong> {heading}</p>
    <p><strong>text:</strong> {text}</p>
    <p><strong>icon:</strong> {icon}</p>
    <img src={`/icons/${icon}.svg`}/>
  </div>
)};


export default Card;
