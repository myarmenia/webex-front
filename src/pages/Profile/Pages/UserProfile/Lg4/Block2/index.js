import React from "react";
import Grid from "@material-ui/core/Grid";

function Block2({ email, phone, country }) {
  return (
    <Grid className="mt-20px mb-20px">
      <Grid container item lg={12}>
        <Grid className="colorBlock2ProfilePage" item lg={6}>
          <i className="fa fa-envelope-o"></i>
        </Grid>
        <Grid className="textAlignRight" item lg={6}>
          <a className="colorProfilePage" href={"mailto:" + email}>
            {email}
          </a>
        </Grid>
      </Grid>
      <Grid container item lg={12}>
        <Grid className="colorBlock2ProfilePage" item lg={6}>
          <i className="fa fa-phone fs-20"></i>
        </Grid>
        <Grid className="textAlignRight" item lg={6}>
          <a className="colorProfilePage" href={"tel:" + phone}>
            {phone}
          </a>
        </Grid>
      </Grid>
      <Grid container item lg={12}>
        <Grid className="colorBlock2ProfilePage" item lg={6}>
          <i className="fa fa-map-signs fs-20"></i>
        </Grid>
        <Grid className="textAlignRight" item lg={6}>
          <span className="colorProfilePage">{country}</span>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Block2;
