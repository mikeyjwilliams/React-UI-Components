import React from 'react';
import './Button.css';


function NumberButton(props) {
    return ( 
        <button className={`numButton ${props.btnColor}`}>{props.text}</button>  
    );
};
export default NumberButton;