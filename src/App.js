import React from 'react';
import logo from './logo.svg';
import './App.css';

function Operator(props) {
  return <input type = "button" className = "App-button" id = {props.id} value = {props.value} />;
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className = "App">
      <input type = "text" className = "App-input" id = "firstNumber" placeholder = "Input One"/> <br/>
      <input type = "text" className = "App-input" id = "secondNumber" placeholder = "Input Two"/> <br/>
      
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

export default App;
