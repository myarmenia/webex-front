import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import TabPanel1 from './TabPanel1/';
import TabPanel2 from './TabPanel2/';
import TabPanel3 from './TabPanel3/';
import TabPanel4 from './TabPanel4/';
import TabPanel5 from './TabPanel5/';
import TabPanel6 from './TabPanel6/';

import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CONST_USER_DATA } from "../../../../../redux/Variables/Const";


function UserProfileLg8(){

  let value = useSelector( state => state.switchingTabPanels );
  const headingText = CONST_USER_DATA.buttonSwitch;
  const headingSmallText = CONST_USER_DATA.headingSmallText;

  const content = [
    () => (<TabPanel1 />),
    () => (<TabPanel2 />),
    () => (<TabPanel3 />),
    () => (<TabPanel4 />),
    () => (<TabPanel5 />),
    () => (<TabPanel6 />)
  ];

  return (
    <BrowserRouter>
      <Grid item lg={8} md={8} sm={6} xl={6} xs={6}>
        <Paper className="tarorinakGuyn2">
          <List>
            <ListItem>
              <Grid container>
                <Grid className="ml-12px" item lg={10}>
                  <strong>{headingText[value]}</strong>
                  <small className="headerSmall">{headingSmallText[value]}</small>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
            <Route component={content[value]} />
          </List>
        </Paper>
      </Grid>
    </BrowserRouter>
  )
}

export default UserProfileLg8;