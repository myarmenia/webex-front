import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Block2({ email, phone, country }) {
  return (
    <Grid className="mt-20px mb-20px">
      <Grid container item lg={12}>
        <Grid className="colorBlock2ProfilePage" item lg={1} xs={1}>
          <i className="fa fa-envelope-o"></i>
        </Grid>
        <Grid className="textAlignRight" item lg={11} xs={11} zeroMinWidth>
          <Typography noWrap>{email}</Typography>
        </Grid>
      </Grid>
      <Grid container item lg={12}>
        <Grid className="colorBlock2ProfilePage" item lg={1} xs={1}>
          <i className="fa fa-phone fs-20"></i>
        </Grid>
        <Grid className="textAlignRight" item lg={11} xs={11} zeroMinWidth>
          <Typography noWrap>{phone}</Typography>
        </Grid>
      </Grid>
      <Grid container item lg={12}>
        <Grid className="colorBlock2ProfilePage" item lg={1} xs={1}>
          <i className="fa fa-map-signs fs-20"></i>
        </Grid>
        <Grid className="textAlignRight" item lg={11} xs={11} zeroMinWidth>
          <Typography noWrap>{country}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Block2;
