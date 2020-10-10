import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      input_one: "",
      input_two: "",
      output: "",
      errormsg: ""
    };
    this.applyOperator = this.applyOperator.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  applyOperator(event) {
    if(this.state.input_one == "" || this.state.input_two == "") {
      this.setState({errormsg: "Error: The input field cannot be empty!", output: ""});
    }
    else if(isNaN(this.state.input_one) || isNaN(this.state.input_two)) {
      this.setState({errormsg: "Error: The input field must contain only numbers!", output: ""});
    }
    else {
      var input_one = parseFloat(this.state.input_one);
      var input_two = parseFloat(this.state.input_two);
      
      if(event.target.id == "plus") {
        this.setState({output: input_one + input_two, errormsg: ""});
      }
      else if(event.target.id == "minus") {
        this.setState({output: input_one - input_two, errormsg: ""});
      }
      else if(event.target.id == "multiply") {
        this.setState({output: input_one * input_two, errormsg: ""});
      }
      else if(event.target.id == "divide") {
        this.setState({output: input_one / input_two, errormsg: ""});
      }
    }
  }

  clearFields() {
    this.setState({
      input_one: "",
      input_two: "",
      output: "",
      errormsg: ""
    });
  }

  render() {
    return (
      <div className = "App">
        <p className = "App-errormsg">{this.state.errormsg}</p>
        <input type = "text" id = "input_one" className = "App-input" placeholder = "Input One" value = {this.state.input_one} onChange = {(event) => this.setState({[event.target.id]: event.target.value})}/> <br/>
        <input type = "text" id = "input_two" className = "App-input" placeholder = "Input Two" value = {this.state.input_two} onChange = {(event) => this.setState({[event.target.id]: event.target.value})}/> <br/>

        <button id = "plus" className = "App-button" onClick = {this.applyOperator}>+</button>
        <button id = "minus" className = "App-button" onClick = {this.applyOperator}>−</button>
        <button id = "multiply" className = "App-button" onClick = {this.applyOperator}>×</button>
        <button id = "divide" className = "App-button" onClick = {this.applyOperator}>÷</button>
        
        <button id = "clear" className = "App-clearbutton" onClick = {this.clearFields}>Clear</button> <br/>
        <input type = "text" id = "output" className = "App-output" placeholder = "Output" value = {this.state.output} disabled/> <br/>
      </div>
    );
  }
}

export default App;
