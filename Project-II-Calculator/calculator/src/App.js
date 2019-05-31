import React from 'react';
import './App.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes, faDivide, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'

// const multiply = <FontAwesomeIcon icon={faTimes} />
// const division = <FontAwesomeIcon icon={faDivide} />
// const subtract = <FontAwesomeIcon icon={faMinus} />
// const addition = <FontAwesomeIcon icon={faPlus} />
// const equals = <FontAwesomeIcon icon={faEquals} />


import NumberButton from './components/ButtonComponents/NumberButton';
// import ActionButton from './components/ButtonComponents/ActionButton';
const Numbers = [
{
  num: 'clear',
  class1: 'white-button',
  class2: 'three-wide',
  class3: ''
},
{
  num: '/',
  class1: 'red-button',
  class2: 'one-wide',
  class3: 'end'
},
{
  num: 7,
  class1: 'white-button',
  class2: 'one-wide',
  class3: ''
},
{
  num: 8,
  class1: 'white-button',
  class2: 'one-wide',
  class3: ''
},
{
  num: 9,
  class1: 'white-button',
  class2: 'one-wide',
  class3: ''
},
{
  num: 'X',
  class1: 'red-button',
  class2: 'one-wide',
  class3: 'end'
},
{
  num: 4,
  class1: 'white-button',
  class2: 'one-wide',
  class3: ''
},
{
  num: 5,
  class1: 'white-button',
  class2: 'one-wide',
  class3: ''
},
{
  num: 6,
  class1: 'white-button',
  class2: 'one-wide',
  class3: ''
},
{
  num: '-',
  class1: 'red-button',
  class2: 'one-wide',
  class3: 'end'
},
{
  num: 1,
  class1: 'white-button',
  class2: 'one-wide',
  class3: ''
},
{
  num: 2,
  class1: 'white-button',
  class2: 'one-wide',
  class3: ''
},
{
  num: 3,
  class1: 'white-button',
  class2: 'one-wide',
  class3: ''
},
{
  num: '+', 
  class1: 'red-button',
  class2: 'one-wide',
  class3: 'end'
},
{
  num: 0,
  class1: 'white-button',
  class2: 'three-wide',
  class3: ''
},
{
  num: '=',
  class1: 'red-button',
  class2: 'one-wide',
  class3: 'end'
}
];

const numberArray = Numbers.map( (nums, i) => {
  return <NumberButton key={i} number={nums} />
});




const App = () => {
  return (
    <div className="container">
      {numberArray}
    </div>
  );
};

export default App;
