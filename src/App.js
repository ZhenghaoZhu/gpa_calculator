import logo from "./logo.svg";
import React, { Component } from "react";
import { Layout, Button } from "antd";
import SemesterCard from "./components/SemesterCard";
import "./App.css";
import "antd/dist/antd.css";

const { Header, Footer } = Layout;

class App extends Component {
  state = {
    semesterArray: ["Semester 1", "Semester 2"],
  };

  addSemester = () => {
    var numArrayLen = this.state.semesterArray.length + 1;
    this.state.semesterArray.push("Semester " + numArrayLen);
    this.setState({
      semesterArray: this.state.semesterArray,
    });
  };

  removeSemester = (curSemester) => {
    var semesterIndex = this.state.semesterArray.indexOf(curSemester);
    if (semesterIndex < 0) {
      return;
    }
    delete this.state.semesterArray[semesterIndex];
    this.setState({
      semesterArray: this.state.semesterArray,
    });
  };

  render() {
    const semesterConstructed = this.state.semesterArray.map((curSemester) => {
      return (
        <SemesterCard
          curSemester={curSemester}
          removeSemesterCallback={this.removeSemester}
        />
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
              <Button
                onClick={this.addSemester}
                size="large"
                type="primary"
                className="addCourse"
              >
                Add Semester
              </Button>
              <Button size="large" type="dashed" className="resultantGPA">
                {1}
              </Button>
            </div>
          </div>
          <Footer
            style={{
              textAlign: "center",
              paddingBottom: "5px",
              paddingRight: "2px",
            }}
          />
        </div>
      </Layout>
    );
  }
}

export default App;
