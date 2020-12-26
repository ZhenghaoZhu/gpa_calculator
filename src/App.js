import logo from './logo.svg';
import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import './App.css';
import { SemesterContainer } from './components/SemesterContainer.jsx';

class App extends Component {
  state = {
    numArray : ["Semester 1"]
  }
  
  addSemester = () => {
    var numArrayLen = this.state.numArray.length + 1;
    this.state.numArray.push("Semester " + numArrayLen) 
    this.setState({
      numArray: this.state.numArray
    });
  };
  render() {
    const styles = {
      container: {
        borderWidth: "10pt",
        borderColor: "blue",
        borderStyle: "solid",
      }
    }
    
    return (
      <div>
        {this.state.numArray.map((key) => (
          <SemesterContainer key={key} curSemester={key}/>
        ))}
        <button type="button" id="addSemesterButton" onClick={this.addSemester}>Click Me!</button>
      </div>
    )
  }
}

export default App;
