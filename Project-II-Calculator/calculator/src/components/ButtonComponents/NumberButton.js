import React from 'react';
import './Button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDivide, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'

const multiply = <FontAwesomeIcon icon={faTimes} />
const division = <FontAwesomeIcon icon={faDivide} />
const subtract = <FontAwesomeIcon icon={faMinus} />
const addition = <FontAwesomeIcon icon={faPlus} />
const equals = <FontAwesomeIcon icon={faEquals} />

class NumButton extends React.Component {
    render() {
        return (
            <button className="button num-button">
                {this.props.value}
            </button>
        );
    }
}

class CalculatorNumBtns extends React.Component {
    renderButton(i) {
        return <NumButton value={i} />
    }
    
    render() {
        return (
            <div className="number-buttons">
                <div className="board-row">
                    <span className="one-wide">{this.renderButton(7)}</span>
                    <span className="one-wide">{this.renderButton(8)}</span>
                    <span className="one-wide">{this.renderButton(9)}</span>
                </div>
                <div className="board-row">
                    <span className="one-wide">{this.renderButton(4)}</span>
                    <span className="one-wide">{this.renderButton(5)}</span>
                    <span className="one-wide">{this.renderButton(6)}</span>
                </div>
                <div className="board-row">
                    <span className="one-wide">{this.renderButton(1)}</span>
                    <span className="one-wide">{this.renderButton(2)}</span>
                    <span className="one-wide">{this.renderButton(3)}</span>
                </div>
                <div className="board-row">
                    <span className="three-wide">{this.renderButton(0)}</span>
                </div>
            </div>
        );
    }
}

function NumberButton() {
    return (
        <CalculatorNumBtns />
    );
}

export default NumberButton;