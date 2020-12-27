import React, { Component } from "react";
import { Button, Card, Select, Input } from "antd";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import CourseCard from "./CourseCard";
import "antd/dist/antd.css";

export class SemesterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseArray: ["Course 1", "Course 2"],
    };
    console.log(this.props);
  }

  componentDidMount() {
    console.log(this.props.curSemester + " mounted.");
  }

  addCourse = () => {
    var courseArrayLen = this.state.courseArray.length + 1;
    this.state.courseArray.push("Course " + courseArrayLen);
    this.setState({
      courseArray: this.state.courseArray,
    });
  };

  semesterCardRemove = () => {
    console.log(this.props.curSemester);
    this.props.removeSemesterCallback(this.props.curSemester);
  };

  render() {
    const coursesConstructed = this.state.courseArray.map((curCourse) => {
      return <CourseCard curCouse={curCourse} />;
    });
    return (
      <Card
        style={{ marginTop: 10 }}
        type="inner"
        title={this.props.curSemester}
        extra={[
          <Button
            type="primary"
            danger
            icon={<PlusCircleOutlined />}
            style={{
              marginTop: "2px",
              marginRight: "5px",
              width: "130px",
              backgroundColor: "#459a60",
              borderColor: "#459a60",
              fontWeight: "600",
            }}
            onClick={this.addCourse}
          >
            Add Course
          </Button>,
          <Button
            type="primary"
            danger
            style={{ marginRight: "5px", width: "50px" }}
            icon={<DeleteOutlined />}
            onClick={this.semesterCardRemove}
          ></Button>,
        ]}
      >
        {coursesConstructed}
      </Card>
    );
  }
}

export default SemesterCard;
