import React from 'react';
import './App.css';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorContainer from './components/DisplayComponents/CalculatorContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className="container">
      <CalculatorContainer calcDisplay={"calculator-display"}>
         <CalculatorDisplay  calcOutput={"calc-output"} output={"0"} />
      </CalculatorContainer>
      
      <ButtonContainer btnWidth={'three-wide'} >
        <ActionButton buttonStyle={'white-button'} text={'Clear'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'red-button'} text={'/'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'white-button'} text={'7'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'white-button'} text={'8'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'white-button'} text={'9'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'red-button'} text={'X'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'}>
        <NumberButton buttonStyle={'white-button'} text={'4'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'white-button'} text={'5'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'}>
        <NumberButton buttonStyle={'white-button'} text={'6'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'red-button'} text={'-'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'white-button'} text={'1'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'white-button'} text={'2'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'white-button'} text={'3'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'} >
        <NumberButton buttonStyle={'red-button'} text={'+'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'three-wide'} >
        <ActionButton buttonStyle={'white-button'} text={'0'} />
      </ButtonContainer>
      <ButtonContainer btnWidth={'one-wide'}>
        <NumberButton buttonStyle={'red-button'} text={'='} />
      </ButtonContainer>
    </div>
  );
};

export default App;
