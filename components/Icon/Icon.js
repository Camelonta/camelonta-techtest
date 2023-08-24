import React from 'react';
import s from './styles.module.css';

const Icon = ({ icon }) => {
    const svg = `/icons/${icon}.svg`;

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <img src={svg} alt={icon} className={s.img} />
            </div>
        </div>
    )
};


export default Icon;
