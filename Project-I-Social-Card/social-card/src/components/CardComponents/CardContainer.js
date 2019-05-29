import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <div>
            <span className="border">
                <CardBanner />
                <CardContent />
            </span>
           
        </div>
    );
}

export default CardContainer;