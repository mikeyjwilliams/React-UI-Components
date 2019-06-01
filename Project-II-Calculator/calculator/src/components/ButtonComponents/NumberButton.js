import React from 'react';
import './Button.css';


function NumberButton(props) {
    return ( 
        <button className={`numButton ${props.btnWidth} ${props.btnColor}`}>{props.data}</button>  
    );
};
export default NumberButton;