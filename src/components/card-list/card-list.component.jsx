import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = ({ aliens }) => {
    return <div className='card-list'>
        {
            aliens.map(alien => <Card key={alien.id} alien={alien} />)
        }
    </div>
}; 