import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <div>
            <div className="border">
                <CardBanner />
                <CardContent />
            </div>
           
        </div>
    );
}

export default CardContainer;