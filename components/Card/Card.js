import React from 'react';
import s from './styles.module.css';
import Icon from '../Icon/Icon.js';

const Card = ({ card }) => {
  const { id, heading, text, icon } = card;
  return (
    <div className={s.card}>
      <p><strong>id:</strong> {id}</p>
      <p><strong>heading:</strong> {heading}</p>
      <p><strong>text:</strong> {text}</p>
      <p><strong>icon:</strong> {icon}</p>
      <Icon icon={icon} />
      {/* <img src={`/icons/${icon}.svg`} /> */}
    </div>
  )
};


export default Card;
