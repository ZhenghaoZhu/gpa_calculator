import logo from './logo.svg';
import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import SemesterCard from './components/SemesterCard';
import './App.css';
import 'antd/dist/antd.css';

const { Header, Footer } = Layout;

class App extends Component {
  state = {
    numArray : ["Semester 1", "Semester 2"]
  }
  
  addSemester = () => {
    var numArrayLen = this.state.numArray.length + 1;
    this.state.numArray.push("Semester " + numArrayLen) 
    this.setState({
      numArray: this.state.numArray
    });
  };

  render() {
    
    const semesterConstructed = this.state.numArray.map((curSemester) => {
        return (
          <SemesterCard curSemester={curSemester}/>
        );
    });
    
    return (
      
      <Layout className="layout">
        <div className="container" style={{ minHeight: window.innerHeight }}>
          <Header style={{ opacity: 0.8, backgroundColor: "#7391bc" }}>
            <h1 className="logo">GPA Calculator</h1>
          </Header>
          <div className="selectBody">
            {semesterConstructed}
            <div className="addContainer">
              <Button onClick={this.addSemester} size="large" type="primary" className="addCourse">Add a course</Button>
              <Button size="large" type="dashed" className="resultantGPA">{1}</Button>
            </div>
          </div>
          <Footer style={{
            textAlign: 'center',
            paddingBottom: '5px'
          }}>
            Source code is missing.
          </Footer>
        </div>
      </Layout>
    )
  }
}

export default App;
