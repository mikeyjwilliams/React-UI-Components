import React from 'react';
import './Button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'

const division = <FontAwesomeIcon icon={faDivide} />
const multiply = <FontAwesomeIcon icon={faTimes} />
const subtract = <FontAwesomeIcon icon={faMinus} />
const addition = <FontAwesomeIcon icon={faPlus} />
const equals = <FontAwesomeIcon icon={faEquals} />

const fontawesome = [
    {
        mathSymbol: 'faDivide',
    },
    {
        mathSymbol: 'faTimes'
    },
    {
        mathSymbol: 'faMinus'
    },
    {
        mathSymbol: 'faPlus'
    },
    {
        mathSymbol: 'faEquals'
    }];

    const fontawesomeArray = fontawesome.map( (symbols) => {
        return <FontAwesomeIcon icon={symbols} />
    })

    console.log(fontawesomeArray);

function ActionButton(props) {
    return (
        {props.fontawesome.fontawesomeArray}
    );
}

export default ActionButton;