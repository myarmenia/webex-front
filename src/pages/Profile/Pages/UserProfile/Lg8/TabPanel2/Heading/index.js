import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CONST_USER_DATA } from '../../../../../../../redux/Variables/Const/';

function CustomerInfo(props){
  let index = props.tiv;
  const nameHeading = CONST_USER_DATA.headingText;

  return (
    <Grid className="pt-20px" item lg={12} md={12} sm={12} xl={12} xs={12}>
      <strong>{ nameHeading[index] }</strong>
    </Grid>
  )
}

export default CustomerInfo;