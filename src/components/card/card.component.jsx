import React from 'react';
import './card.styles.css';


export const Card = (props) => (
    <div className='card-container'>
        <img alt='alien' src={`https://robohash.org/${props.alien.id}?set=set5&size=180x180`} />
        <h2>{props.alien.name}</h2>
        <p>{props.alien.email}</p>
    </div>
);