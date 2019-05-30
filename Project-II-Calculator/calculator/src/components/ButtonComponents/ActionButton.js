import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <button className="button num-button">
                {this.props.value}
            </button>
        );
    }
}

class CalculatorButtons extends React.Component {
    renderBtn(i) {
        return <Button value={i} />
    }

    render() {
        return (
            <div>
                <div className="number-buttons">
                    <div className="three-wide">{this.renderBtn('clear')}</div>
                </div>    
                <div className="calc-signs">
                    <div className=""></div>
                </div>
            </div>
        );
    }
}

function ActionButton() {
    return (
        <CalculatorButtons />
    );
}

export default ActionButton;