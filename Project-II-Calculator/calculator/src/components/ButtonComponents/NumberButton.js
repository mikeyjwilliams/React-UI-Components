import React from 'react';
import './Button.css';

class NumButton extends React.Component {
    render() {
        return (
            <button className="button num-button">
                {this.props.value}
            </button>
        );
    }
}

class CalculatorBtns extends React.Component {
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
        <CalculatorBtns />
    );
}

export default NumberButton;