import React from 'react';
import './Button.css';

function ButtonContainer(props) {
    return (
    <div className={props.btnWidth}>
        {props.children}
    </div>
    );
}
export default ButtonContainer;