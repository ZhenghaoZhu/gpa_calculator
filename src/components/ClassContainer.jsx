import React, { Component } from 'react';
import { Grid, Input } from '@material-ui/core';
import '../index.css';

const options = [
    "A", "B", "C", "D", "F"
  ];

export class ClassContainer extends Component {
    render() {
        return (
            <div style={{marginBottom: "15px"}}>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <Grid item xs="5" style={{textAlign: "center"}}>
                        <input type="text" id="textInput" name="fname"></input>
                    </Grid>
                    <Grid item xs="2" style={{textAlign: "center"}}>
                        <select name="gradeSelect" id="gradeSelect">
                            {options.map((key) => (
                                <option value={key}>{key}</option>
                            ))}
                        </select>
                    </Grid>
                    <Grid item xs="5" style={{textAlign: "center"}}>
                        <input type="text" id="textInput" name="fname"></input>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ClassContainer
