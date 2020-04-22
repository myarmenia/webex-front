import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  }
}));

function Input(props) {
  const classes = useStyles();

  let textValue = props.defaultValue;
  let textPlaceholder = props.textPlaceholder;
  let nameClass = props.classNameProps

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={nameClass}
        defaultValue={textValue}
        placeholder={textPlaceholder}
      />
    </Paper>
  );
}

export default Input;