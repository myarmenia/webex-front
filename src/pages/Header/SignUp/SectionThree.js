import React, { useState, useEffect } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/es/Button/Button";
import { useTranslation } from "react-i18next";

import { packagesWithTheirCourses } from "../../../redux/selectors/coursesData";

import { getFullPackages } from "../../../redux/actionCreators/coursesData";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  ListItemIcon,
  Checkbox,
} from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

function ThirdStep(props) {
  const { t } = useTranslation(["forms", "translation"]);

  const prevStep = () => {
    props.prevProps("two");
  };

  const nextStep = () => {
    if (!selectedCourses.length) return false;

    props.set({ preferred_courses: selectedCourses });
    props.nextProps("four");
  };

  const [value, setValue] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleClick = (id) =>
    setSelectedCourses((prevCourses) => [...prevCourses, id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    props.fetchFullPackages();
  }, [props]);

  const tabContent = (courses) => (
    <List>
      {courses.map(({ id, name }) => (
        <ListItem key={id}>
          <ListItemIcon>
            <Checkbox
              color="primary"
              edge="start"
              checked={selectedCourses.includes(id)}
              onChange={() => handleClick(id)}
              tabIndex={-1}
            />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );

  const tabs = (packages) => (
    <>
      <Toolbar
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
        position="static"
        color="default"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          // variant="fullWidth"
        >
          (
          {packages.map(({ name }, index) => (
            <Tab key={index} label={name} />
          ))}
          )
        </Tabs>
      </Toolbar>
      {packages.map(({ courses }, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tabContent(courses)}
        </TabPanel>
      ))}
    </>
  );

  return (
    <div>
      <div className="form-title mb-20">
        <h4>{t("signup.title")}</h4>
      </div>
      {props.packagesWithCourses.length ? (
        tabs(props.packagesWithCourses.slice(0, 2))
      ) : (
        <CircularProgress size={25} />
      )}
      <div className="mt-5">
        <Button
          variant="contained"
          size="large"
          onClick={prevStep}
          id="buttonColor"
          className="mr-4"
        >
          {t("translation:buttons.prev")}
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          id="buttonColor"
        >
          {t("translation:buttons.next")}
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  packagesWithCourses: packagesWithTheirCourses(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFullPackages: () => dispatch(getFullPackages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdStep);
