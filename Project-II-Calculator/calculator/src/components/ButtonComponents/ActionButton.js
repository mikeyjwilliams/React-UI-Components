import React from 'react';
import './Button.css';



    // console.log(fontawesomeArray);

function ActionButton(props) {
    return (
       <button className={`actionBtn ${props.buttonColor}`}>{props.data}</button>
    );
}

export default ActionButton;