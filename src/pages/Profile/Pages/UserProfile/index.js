import React from 'react';
import clsx from 'clsx';
import UserProfileLg4 from './Lg4/';
import UserProfileLg8 from './Lg8/';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  }
}));

export default function UserProfile() {
  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content) + " fontFamilyPoppins"}
    >
      <Grid container spacing={3}>
        <UserProfileLg4 />
        <UserProfileLg8 />
      </Grid>
    </main>
  );
}