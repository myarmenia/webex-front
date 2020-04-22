import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Block1 from "./Block1/";
import Block2 from "./Block2/";
import Block3 from "./Block3/";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

function UserProfileLg4() {
  const classes = useStyles();

  const {
    name = "",
    last_name = "",
    id = 0,
    email = "",
    online = false,
    phone = "",
    country = "",
  } = useSelector((state) => state.currentUser.user);

  return (
    <Grid item lg={4} md={4} sm={6} xl={6} xs={6}>
      <Paper className={classes.paper}>
        <Block1 {...({}, {name, lastName: last_name, online})} />
        <Block2 {...({}, {email, phone, country})}  />
        <Block3 />
      </Paper>
    </Grid>
  );
}

export default UserProfileLg4;
