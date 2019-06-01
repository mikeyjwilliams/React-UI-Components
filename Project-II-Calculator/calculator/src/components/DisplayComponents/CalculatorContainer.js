import React from 'react';
import './Display.css';
import CalculatorDisplay from './CalculatorDisplay';

function CalculatorContainer(props) {
    <div className={props.calcDisplay}>
        {props.children}
    </div>
}
export default CalculatorContainer;