import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { getFullPackages } from "../../../../../redux/actionCreators/coursesData";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

import TabPanel1 from "./TabPanel1/";
import TabPanel2 from "./TabPanel2/";
import TabPanel3 from "./TabPanel3/";
import TabPanel4 from "./TabPanel4/";
import TabPanel5 from "./TabPanel5/";
import TabPanel6 from "./TabPanel6/";

import TabPanelPaymentOnline from "./TabPanelPaymentOnline";

import { buttonSwitch } from "../../../../../redux/reducers/switchingTabPanels";

function UserProfileLg8({ fetchFullPackages }) {
  useEffect(() => {
    fetchFullPackages();
  }, []);

  const { t } = useTranslation(["profile"]);
  const value = useSelector((state) => state.switchingTabPanels);
  const { online = false } = useSelector((state) => state.currentUser.user);
  console.log("online", online);

  const tabTransKeyword = buttonSwitch[value];

  const content = [
    () => <TabPanel1 />,
    () => <TabPanel2 />,
    () => <TabPanel3 />,
    () => online ? <TabPanelPaymentOnline /> : <TabPanel4 />,
    () => <TabPanel5 />,
    () => <TabPanel6 />,
  ];

  return (
    <BrowserRouter>
      <Grid item lg={8} md={8} sm={6} xl={6} xs={12}>
        <Paper className="tarorinakGuyn2">
          <List>
            <ListItem>
              <Grid container>
                <Grid className="ml-12px" item lg={10}>
                  <strong className="fs-20">
                    {t(`tabPanels.${tabTransKeyword}.title`)}
                  </strong>
                  <small className="headerSmall">
                    {t(`tabPanels.${tabTransKeyword}.sub_title`)}
                  </small>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
            <Route component={content[value]} />
          </List>
        </Paper>
      </Grid>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchFullPackages: () => dispatch(getFullPackages()),
});

export default connect(null, mapDispatchToProps)(UserProfileLg8);
