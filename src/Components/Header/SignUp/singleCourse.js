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
    const [courses, setCourses] = useState([]);
    const [courseButton, setCourseButton] = useState(false);

    let arr = [];
    let title = "";
    let package_id = null;
    const getCourses=()=>{
        fetch('http://web.webex.am/api/courses')
            .then(response => response.json())
            .then(data => {              
                setCourses(data)
            }).catch((err)=>console.log(err, "fetch-err"))
         
    }
    const filterByPackageId=(arr,id)=>{
        let res=[];
        for(const [i,el] of arr.entries()){
          const curArr = el.packages.filter((pack)=>pack.id === id);
           if(curArr.length){
            res.push(arr[i])
           }
        }
        return res;
    }

 
    const changeTitle = () => {
            getCourses();
               
        if (props.courseLang === "Front End") {
            package_id = 1;
            title = "Front End";
            arr=[... filterByPackageId(courses,package_id)];
            
        } else if (props.courseLang === "Full Stack") {
            package_id = 3;
            title = "Full Stack";
            arr=[... filterByPackageId(courses,package_id)];          
            
        } else {
            package_id = 2;
            title = "Back End";
            arr=[... filterByPackageId(courses,package_id)];
          
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
            props.set({package: package_id});
            //console.log(package_id,"package_id")
            
        }
    }

    const checkedCourseBtn = () => {
        if (checked.length === 0) {
            setCourseButton(false);
        } else {
            props.set({courses: checked});
            //alert("True");
        }
    }
    const goBack = () => {
        props.prevProps('three')
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

                <p className="mt-3"> Buy course or choose package </p>

                <List className={classes.root}>
                    {arr.map(value => {
                        const labelId = `checkbox-list-label-${value.name}`;
                        return (
                            <ListItem key={value.name} role={undefined} dense button onClick={handleToggle(value.id)}>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    id="#26716e"
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                <ListItemText id={labelId} primary={value.name} />
                            </ListItem>
                        );
                    })}
                </List>
                
                {
                    courseButton === true ? <Button onClick={checkedCourseBtn} variant="contained" size="large" id="buttonColor" style={{ margin: "0 auto" }}>Buy Checked Course</Button> : null
                }

            </div>
        <div className="mt-5">
            <Button
                variant="contained"
                size="large"
                id="buttonColor"
                onClick={goBack}

            >
                Prev
            </Button>
        </div>


        </>
    )
}

export default SingleCourse;
