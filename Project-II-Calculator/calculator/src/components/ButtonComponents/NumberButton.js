import React from 'react';
import './Button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDivide, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'

const multiply = <FontAwesomeIcon icon={faTimes} />
const division = <FontAwesomeIcon icon={faDivide} />
const subtract = <FontAwesomeIcon icon={faMinus} />
const addition = <FontAwesomeIcon icon={faPlus} />
const equals = <FontAwesomeIcon icon={faEquals} />


function NumberButton() {
    return (
        <CalculatorNumBtns />
    );
}

export default NumberButton;