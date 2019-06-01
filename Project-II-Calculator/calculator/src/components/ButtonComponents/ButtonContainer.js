import React from 'react';
import './Button.css';

function ButtonContainer(props) {
    <div className={props.buttonWidth}>
        {props.children}
    </div>
}
export default ButtonContainer;