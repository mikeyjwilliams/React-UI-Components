import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <div>
            <div className="border">
                <a href="https://www.reactjs.org">
                    <CardBanner />
                    <CardContent />
                </a>
            </div>
           
        </div>
    );
}

export default CardContainer;