import React, { Component } from 'react'
import ClassContainer from './ClassContainer.jsx';
import { Grid } from '@material-ui/core';
import 'fontsource-roboto';
import '../index.css';

export class SemesterContainer extends Component {

    constructor(props) {
        super(props);
        console.debug("In SemesterContainer constructor");
    }
    componentDidMount = () => {
        console.debug("SemesterContainer mounted.");
    }

    classCount = [1,2,3]

    render() {
        const styles = {
            container: {
                borderWidth: "2px",
                borderColor: "blue",
                borderStyle: "solid",
                borderRadius: "5px",
                marginBottom: "10px",
                width: "60%",
                marginLeft: "20%"
            }
        };
        return (
            <div style = {styles.container}>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{marginBottom:"10px"}}
                >
                    <Grid item xs="5" style={{textAlign: "center"}}>
                        Course Name:
                    </Grid>
                    <Grid item xs="2" style={{textAlign: "center"}}>
                        Grade
                    </Grid>
                    <Grid item xs="5" style={{textAlign: "center"}}>
                        Credits/Hours
                    </Grid>
                </Grid>
                {this.classCount.map((key) => (
                <ClassContainer key={key}/>
                ))}
            </div>
        );
    }
}

export default SemesterContainer
