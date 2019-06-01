import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
       <button className={`actionBtn ${props.btnWidth} ${props.btnColor}`}>{props.data}</button>
    );
}
export default ActionButton;