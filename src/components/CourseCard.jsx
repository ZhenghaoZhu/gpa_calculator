import React, { Component } from "react";
import { Select, Input } from "antd";

const SelectOption = Select.Option;

const gradeOptions = [
  { value: 4.0, letter: "A" },
  { value: 3.67, letter: "A-" },
  { value: 3.33, letter: "B+" },
  { value: 3.0, letter: "B" },
  { value: 2.67, letter: "B-" },
  { value: 2.33, letter: "C+" },
  { value: 2.0, letter: "C" },
  { value: 1.67, letter: "C-" },
  { value: 1.33, letter: "D" },
  { value: 1.0, letter: "D" },
  { value: 0.0, letter: "F" },
];

const creditOptions = [
  { value: 1, number: "1" },
  { value: 2, number: "2" },
  { value: 3, number: "3" },
  { value: 4, number: "4" },
  { value: 5, number: "5" },
  { value: 6, number: "6" },
  { value: 7, number: "7" },
  { value: 8, number: "8" },
  { value: 9, number: "9" },
  { value: 10, number: "10" },
];

const gradeConstructedOptions = gradeOptions.map((curOption) => {
  return (
    <SelectOption value={curOption.value}>{curOption.letter}</SelectOption>
  );
});

const creditConstructedOptions = creditOptions.map((curOption) => {
  return (
    <SelectOption value={curOption.value}>{curOption.number}</SelectOption>
  );
});
export class CourseCard extends Component {
  render() {
    return (
      <div>
        <Input
          placeholder="Course Name"
          style={{ width: 290, marginBottom: "10px" }}
        />
        <Select
          style={{ width: 100, marginLeft: "30px" }}
          placeholder="Grade"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {gradeConstructedOptions}
        </Select>
        <Select
          style={{ width: 100 }}
          placeholder="Credits"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
          className="inputCredits"
        >
          {creditConstructedOptions}
        </Select>
      </div>
    );
  }
}

export default CourseCard;
