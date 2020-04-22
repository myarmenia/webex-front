import React from "react";
import Grid from "@material-ui/core/Grid";
import { CONST_USER_DATA } from "../../../../../../redux/Variables/Const";
import { useSelector } from "react-redux";

function Block2({ email, phone, country }) {
  let data = useSelector((state) => state.switchingState);

  return (
    <Grid className="mt-20px mb-20px">
      <Grid container item lg={12}>
        <Grid className="colorBlock2ProfilePage" item lg={6}>
          {CONST_USER_DATA.userMail}
        </Grid>
        <Grid className="textAlignRight" item lg={6}>
          {/* <a className="colorProfilePage" href={ "mailto:" + data.userMail }> */}
          <a className="colorProfilePage" href={"mailto:" + email}>
            {email}
          </a>
        </Grid>
      </Grid>
      <Grid container item lg={12}>
        <Grid className="colorBlock2ProfilePage" item lg={6}>
          {CONST_USER_DATA.userPhone}
        </Grid>
        <Grid className="textAlignRight" item lg={6}>
          {/* <a className="colorProfilePage" href={ "tel:" + data.userPhone }> */}
          <a className="colorProfilePage" href={"tel:" + phone}>
            {phone}
          </a>
        </Grid>
      </Grid>
      <Grid container item lg={12}>
        <Grid className="colorBlock2ProfilePage" item lg={6}>
          {CONST_USER_DATA.userLocation}
        </Grid>
        <Grid className="textAlignRight" item lg={6}>
          <span className="colorProfilePage">
            {/* {data.userLocation} */}
            {country}
          </span>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Block2;
