import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CONST_USER_DATA } from '../../../../../../../redux/Variables/Const/';

function Heading(){
  const constChangePasswordText = CONST_USER_DATA.constChangePasswordText;

  return (
    <>
      <Grid className="pt-20px" item lg={12} md={12} sm={12} xl={12} xs={12}>
        <strong>
          {constChangePasswordText}
        </strong>
      </Grid>
    </>
  )
}

export default Heading;