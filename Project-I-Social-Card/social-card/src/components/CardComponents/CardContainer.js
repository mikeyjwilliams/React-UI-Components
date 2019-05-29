import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

function CardContainer() {
    return (
        <div>
            <span className="border">
                <CardBanner />

            </span>
           
        </div>
    );
}

export default CardContainer;