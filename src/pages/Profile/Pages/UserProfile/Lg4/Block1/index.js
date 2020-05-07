import React from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
/** name, lastName, image */

import DefaultImage from "../../../../../../img/news/avatar.png";

function Block1({ name, lastName, online }) {
  let data = useSelector((state) => state.switchingState);
  let educationType = online ? "online" : "stationary";

  return (
    <Grid className="pt-38px mb-20" container>
      <Grid item lg={4}>
        <img src={DefaultImage} alt={data.userImageAlt} />
      </Grid>
      <Grid className="pl-20px" item lg={8}>
        <Link className="colorProfilePage" to="/profile">
          <strong>{name + " " + lastName}</strong>
        </Link>
        <Grid>
          <code>{educationType}</code>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Block1;
