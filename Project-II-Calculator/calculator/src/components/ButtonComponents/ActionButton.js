import React from 'react';
import './Button.css';



    // console.log(fontawesomeArray);

function ActionButton(props) {
    return (
       <button className={`actionBtn ${props.red-button}`}>{props.data}</button>
    );
}

export default ActionButton;