import React from 'react';
import s from './styles.module.css';

const Icon = ({ icon }) => {
    const svg = `/icons/${icon}.svg`;

    return (
        <div>
            <img src={svg} />
        </div>
    )
};


export default Icon;
