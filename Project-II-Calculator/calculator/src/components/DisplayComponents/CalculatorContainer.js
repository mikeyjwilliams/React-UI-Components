import React from 'react';
import './Display.css';

function CalculatorContainer(props) {
    return (
    <div className={props.calcDisplay}>
        {props.children}
    </div>
    ); 
}
export default CalculatorContainer;