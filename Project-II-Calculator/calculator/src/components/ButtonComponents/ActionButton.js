import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
       <button className={`actionBtn ${props.buttonWidth} ${props.buttonColor}`}>{props.data}</button>
    );
}
export default ActionButton;