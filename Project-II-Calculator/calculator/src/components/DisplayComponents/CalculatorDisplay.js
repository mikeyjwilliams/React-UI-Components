import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return (
       <input type="text" className={props.calcOutput} calc={props.output} />
    );
}
export default CalculatorDisplay;