import React from 'react';
import './Button.css';


function NumberButton(props) {
    return ( 
        <button className={props.number.class1 +' '+ props.number.class2 +' '+ props.number.class3}>{props.number.num}</button>  
    );
};
export default NumberButton;