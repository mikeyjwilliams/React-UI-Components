import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
       <button className={`actionBtn ${props.buttonStyle}`}>{props.text}</button>
    );
}
export default ActionButton;