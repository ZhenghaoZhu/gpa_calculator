import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { SemesterContainer } from './components/SemesterContainer.jsx';

class App extends Component {

  numArray = [1,2]
  
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
        {this.numArray.map((key) => (
          <SemesterContainer key={key}/>
        ))}
      </div>
    )
  }
}

export default App;
