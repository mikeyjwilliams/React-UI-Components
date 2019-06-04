import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: ""
        }
    }
    displayNumber = (event) => {
        this.setState({num: [...this.state.num, this.props.text]})
        console.log(this.state.num);
    }
    render() {
        return ( 
            <button type="button" className={`numButton ${this.props.buttonStyle}`}
            onClick={this.displayNumber}>{this.props.text} </button>  
        );
    }

}
export default NumberButton;