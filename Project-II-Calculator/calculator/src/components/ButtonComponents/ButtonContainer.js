import React from 'react';
import './Button.css';

function ButtonContainer(props) {
    return (
    <div>
        {props.children}
    </div>
    );
}
export default ButtonContainer;