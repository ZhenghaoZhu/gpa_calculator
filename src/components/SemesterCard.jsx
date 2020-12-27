import React, { Component } from 'react'
import { Button, Card, Select, Input } from 'antd';
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const SelectOption = Select.Option;

const gradeOptions = [
    {value: 4.00, letter: "A"},
    {value: 3.67, letter: "A-"},
    {value: 3.33, letter: "B+"},
    {value: 3.00, letter: "B"},
    {value: 2.67, letter: "B-"},
    {value: 2.33, letter: "C+"},
    {value: 2.00, letter: "C"},
    {value: 1.67, letter: "C-"},
    {value: 1.33, letter: "D"},
    {value: 1.00, letter: "D"},
    {value: 0.00, letter: "F"},
];

const creditOptions = [
    {value: 1, number: "1"},
    {value: 2, number: "2"},
    {value: 3, number: "3"},
    {value: 4, number: "4"},
    {value: 5, number: "5"},
    {value: 6, number: "6"},
    {value: 7, number: "7"},
    {value: 8, number: "8"},
    {value: 9, number: "9"},
    {value: 10, number: "10"},
];

export class SemesterCard extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        
        const gradeConstructedOptions = gradeOptions.map((curOption) => {
            return (
            <SelectOption value = {curOption.value}>
                {curOption.letter}
            </SelectOption>
            );
        });

        const creditConstructedOptions = creditOptions.map((curOption) => {
            return (
            <SelectOption value = {curOption.value}>
                {curOption.number}
            </SelectOption>
            );
        });

        return (
            <Card
                style={{ marginTop: 10 }}
                type="inner"
                title={this.props.curSemester}
                extra={[<Button type="primary" danger icon={<PlusCircleOutlined/>} style={{marginTop: "1px", marginRight: "5px", width: "120px", backgroundColor: "#459a60", borderColor: "#459a60", fontWeight: "600"}}>Add Class</Button>, <Button type="primary" danger style={{marginRight: "5px", width: "50px"}} icon={<DeleteOutlined/>}></Button>]}
            >
                <Input placeholder="Course Name" style={{ width: 290}} />
                <Select
                    style={{ width: 100 , marginLeft: "30px" }}
                    placeholder="Grade"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {gradeConstructedOptions}
                </Select>
                <Select
                    style={{ width: 100 }}
                    placeholder="Credits"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    className="inputCredits"
                >
                    {creditConstructedOptions}
                </Select>
            </Card>
        )
    }
}

export default SemesterCard
