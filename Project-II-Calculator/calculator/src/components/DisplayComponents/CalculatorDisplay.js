import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return (
       <div  className={props.calcOutput} calc={props.output}>0</div>
    );
}
export default CalculatorDisplay;