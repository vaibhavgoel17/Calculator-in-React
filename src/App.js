import React from 'react';
import logo from './logo.svg';
import './App.css';

function Operator(props) {
  return <input type = "button" className = "App-button" id = {props.id} value = {props.value} />;
}

class App extends React.Component{
  render() {
    return (
      <div className = "App">
        <input type = "text" className = "App-input" id = "input_one" placeholder = "Input One"/> <br/>
        <input type = "text" className = "App-input" id = "input_two" placeholder = "Input Two"/> <br/>
        
        {/* <input type = "button" className = "App-button" id = "plus" value = "+" />
        <input type = "button" className = "App-button" id = "minus" value = "−" />
        <input type = "button" className = "App-button" id = "multiply" value = "×" />
        <input type = "button" className = "App-button" id = "divide" value = "÷" /> <br/> */}

        <Operator id = "plus" value = "+" />
        <Operator id = "minus" value = "−" />
        <Operator id = "multiply" value = "×" />
        <Operator id = "divide" value = "÷" /> <br/>
        
        <input type = "button" className = "App-clearbutton" id = "clear" value = "Clear" /> <br/>
        <input type = "text" className = "App-output" id = "output" value = "Output" disabled/> <br/>
      </div>
    );
  }
}

export default App;
