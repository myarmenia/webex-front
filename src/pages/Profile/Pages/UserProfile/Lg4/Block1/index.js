import React from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
/** name, lastName, image */

function Block1({ name, lastName, online }) {
  let data = useSelector((state) => state.switchingState);
  let educationType = online ? 'online' : 'stationary';

  return (
    <Grid className="pt-38px mb-20" container>
      <Grid item lg={4}>
        <img src={data.userImageSrc} alt={data.userImageAlt} />
      </Grid>
      <Grid className="pl-20px" item lg={8}>
        <a className="colorProfilePage" href="google.com">
          {/* <strong>{ data.userName + " " + data.userSurName }</strong> */}
          <strong>{name + " " + lastName}</strong>
        </a>
        <Grid >
        <code >{educationType}</code>
        </Grid>
  
      </Grid>
    </Grid>
  );
}

export default Block1;
