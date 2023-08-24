import React from 'react';
import s from './styles.module.css';

const Card = ({ card }) => {
  const { heading, text } = card;
  return (
    <div className={s.card}>
      <p><strong>{heading}</strong></p>
      <p className={s.p}>{text}</p>
    </div>
  )
};


export default Card;
