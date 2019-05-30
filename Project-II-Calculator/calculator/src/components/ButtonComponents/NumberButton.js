import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <button className="button">
                {this.props.value}
            </button>
        );
    }
}

class CalculatorBtns extends React.Component {
    renderButton(i) {
        return <Button value={i} />
    }
    
    render() {
        return (
            <div class="number-buttons">
                <div className="board-row">
                    <span className="one-wide">{this.renderButton(7)}</span>
                    <span className="one-wide">{this.renderButton(8)}</span>
                    <span className="one-wide">{this.renderButton(9)}</span>
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