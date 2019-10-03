import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        left: "10%"
    },
}));

function SingleCourse(props) {

    const classes = useStyles();
    const [checked, setChecked] = useState([]);
    const [courseButton, setCourseButton] = useState(false);

    let arr = [];
    let title = "";

    const changeTitle = () => {
        if (props.courseLang === "Front End") {
            title = "Front End";
            arr.push("Html", "Css", "JavaScript", "jQuery", "React Js");
        } else if (props.courseLang === "Full Stack") {
            arr.push("Html", "Css", "JavaScript", "jQuery", "React Js", "PHP", "MySql", "Laravel");
            title = "Full Stack";
        } else {
            title = "Back End";
            arr.push("PHP", "MySql", "Laravel");
        }
    }

    changeTitle();

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
            setCourseButton(true);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        
        setChecked(newChecked);
        
    };

    const allCourseBtn = () => {
    
        let result = window.confirm("Press OK to close this option"); 

        if (result) {
            console.log(arr);
        }
    }

    const checkedCourseBtn = () => {
        if (checked.length === 0) {
            setCourseButton(false);
        } else {
            alert("True");
        }
    }

    return (
        <>
            <div className="row justify-content-center">

                <div className="form-title">
                    <h2>{title}</h2>

                    <Button variant="contained" 
                    size="large" 
                    onClick={allCourseBtn}
                    //color="primary" 
                    id="buttonColor"
                    style={{ margin: "0 auto" }}>
                        Buy All Course
                    </Button>

                </div>

                <p className="mt-3"> Buy course or choose packej </p>

                <List className={classes.root}>
                    {arr.map(value => {
                        const labelId = `checkbox-list-label-${value}`;
                        return (
                            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    id="#26716e"
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                <ListItemText id={labelId} primary={value} />
                            </ListItem>
                        );
                    })}
                </List>
                
                {
                    courseButton === true ? <Button onClick={checkedCourseBtn} variant="contained" size="large" id="buttonColor" style={{ margin: "0 auto" }}>Buy Checked Course</Button> : null
                }
            </div>

        </>
    )
}

export default SingleCourse;