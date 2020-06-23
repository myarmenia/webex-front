import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { packagesWithTheirCourses } from "../../../../../../redux/selectors/coursesData";
import webinarPackages from "./webinarPackages";
import pricesOfCourses from "./pricesOfCourses";
import currencies from "./currencies";
import formStyles from "../../../../Components/forms/formStyles";

import api from "../../../../../../redux/api";

const useStyles = makeStyles((theme) => {
  const themeStyles = {
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
    submitButton: {
      paddingTop: "18.5px",
      paddingBottom: "18.5px",
    },
  };
  return Object.assign({}, themeStyles, formStyles);
});

const TabPanelPaymentOnline = ({ packagesWithTheirCourses }) => {
  const { t } = useTranslation(["profile"]);
  const classes = useStyles();

  // Error prevented on selectors/courseData by adding default courses as empty arrays ***
  const packs = [...packagesWithTheirCourses].slice(0, 2);
  const { courses: front = [] } = packs[0];
  const { courses: back = [] } = packs[1];

  const frontHash = front.reduce((hash, course) => {
    hash[course.name] = false;
    return hash;
  }, {});
  const backHash = back.reduce((hash, course) => {
    hash[course.name] = false;
    return hash;
  }, {});
  const allHashed = Object.assign({}, frontHash, backHash);
  const [coursesState, setCoursesState] = React.useState(allHashed);
  const handleChange = (event) => {
    setCoursesState({
      ...coursesState,
      [event.target.name]: event.target.checked,
    });
  };

  const [webinarsState, setWebinarsState] = React.useState("0");
  const handleChangeRadio = (event) => {
    setWebinarsState(event.target.value);
  };

  const [respError, setRespError] = React.useState(false);

  const [currency, setCurrency] = React.useState(currencies[0]);
  const handleChangeSelect = (event) => {
    const currenCurrency = currencies.filter(
      (c) => c.code === event.target.value
    )[0];
    setCurrency(currenCurrency);
  };

  // console.log(coursesState);
  // console.log('webinarsState=', webinarsState);

  const error = Object.values(coursesState).filter((v) => v).length < 1;

  const selectedCourses = Object.entries(coursesState).reduce(
    (array, course) => {
      return course.includes(true) ? [...array, course[0]] : array;
    },
    []
  );
  // console.log(selectedCourses);

  // հետագայում pricesOfCourses փոխարեն courses, երբ գներով գան
  const coursesSum = pricesOfCourses.reduce((sum, course) => {
    return selectedCourses.includes(course.name) ? sum + course.price : sum;
  }, 0);
  // console.log("coursesSum=", coursesSum);

  const webinarsSum = webinarPackages.reduce((sum, wb) => {
    return wb.qty === Number(webinarsState) ? sum + wb.price : sum;
  }, 0);
  // console.log("webinarsSum=", webinarsSum);

  const { multiplier } = currency;
  const discount = 0.6; // Հայկ, դնել ժամանակավոր
  const totalSumDram = (coursesSum - (coursesSum * discount)) + webinarsSum;
  // console.log("totalSumDram DRAM=", totalSumDram);
  const totalSum =
    coursesSum + webinarsSum > 0
      ? Math.floor(totalSumDram / multiplier)
      : totalSumDram;

  // console.log("totalSum", totalSum);
  // console.log("currency=", currency);

  const goToACBA = async () => {
    if (!error) {
      /**
       * 0) backEnd -> return payment-system to test
       * 1) get orderedCourses || selectedCourses (to json) -> add new column "courses"
       * 2) get currency.nbr - currency
       * 3) get totalSum - amount
       * 4) get totalSumDram - base_cost
       * 5) set 0 - months (this way we can determine online user)
       * 6) get webinars qty -
       */
      const orderedCourses = pricesOfCourses.reduce((ordered, course) => {
        return selectedCourses.includes(course.name)
          ? [...ordered, course]
          : ordered;
      }, []);

      const orderedCoursesAndWebinars =
        webinarsState > 0
          ? [
              ...orderedCourses,
              ...webinarPackages.filter((w) => w.qty === Number(webinarsState)),
            ]
          : orderedCourses;

      const language = localStorage.getItem("language");
      let acbaQuery = `?amount=${totalSum}&months=0&base_cost=${totalSumDram}`;
      acbaQuery += `&currency=${currency.nbr}&language=${language}`;
      acbaQuery += `&courses=${JSON.stringify(orderedCoursesAndWebinars)}`;
      acbaQuery += `&webinars=${webinarsState}`;
      console.log(acbaQuery);

      const response = await api.goToACBA(acbaQuery);
      console.log(response);

      if (!response || response.status !== 200 || !response.data)
        return showError();
      const { data } = response;
      if (data.curl_error || data.errorMessage) {
        return showError();
      }
      if (data.formUrl) {
        window.location.assign(data.formUrl);
      }
    }
  };

  const showError = () => {
    console.log("you have error on your payment");
    setRespError(true);
    setTimeout(() => {
      setRespError(false);
    }, 5000);
  };

  return (
    <>
      <div className="form-title mt-30">
        <Typography variant="h5" align="center">
          Price List Of Courses And Webinars
        </Typography>
      </div>
      <div className={classes.container}>
        <FormControl
          component="fieldset"
          className={classes.formControl}
          required
          error={error}
        >
          <FormLabel component="legend">Front End</FormLabel>
          <FormGroup>
            {front &&
              front.map((f, i) => (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      checked={coursesState[i]}
                      onChange={handleChange}
                      name={f.name}
                      color="primary"
                    />
                  }
                  label={f.name}
                />
              ))}
          </FormGroup>
        </FormControl>

        <FormControl
          component="fieldset"
          className={classes.formControl}
          required
          error={error}
        >
          <FormLabel component="legend">Back End</FormLabel>
          <FormGroup>
            {back &&
              back.map((b, i) => (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      checked={coursesState[i]}
                      onChange={handleChange}
                      name={b.name}
                      color="primary"
                    />
                  }
                  label={b.name}
                />
              ))}
          </FormGroup>
          <FormHelperText>Select at least on course</FormHelperText>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Webinars</FormLabel>
          <RadioGroup
            aria-label="webinars"
            name="webinars"
            value={webinarsState}
            onChange={handleChangeRadio}
          >
            {webinarPackages &&
              webinarPackages.map((wb, i) => (
                <FormControlLabel
                  key={i}
                  value={wb.qty.toString()}
                  control={<Radio />}
                  label={`${wb.qty} webinars - ${Math.ceil(
                    wb.price / multiplier
                  )} ${currency.code}`}
                />
              ))}
          </RadioGroup>
        </FormControl>
      </div>
      <hr className="my-2" />
      <Typography variant="subtitle1" align="center" gutterBottom color="secondary">
        {respError ? t("tabPanels.make_payment.payment_errors") : ""}
      </Typography>
      <div className={classes.container}>
        <FormControl component="fieldset" className={classes.formControl}>
          <TextField
            id="select-currency"
            select
            label="Currency"
            value={currency.code}
            onChange={handleChangeSelect}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {currencies.map((option) => (
              <option key={option.code} value={option.code}>
                {option.code}
              </option>
            ))}
          </TextField>
        </FormControl>

        <FormControl
          disabled
          component="fieldset"
          className={classes.formControl}
        >
          <TextField
            label="Sum"
            value={totalSum}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.submitButton}
            onClick={goToACBA}
          >
            {t("tabPanels.make_payment.submit")}
          </Button>
        </FormControl>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  packagesWithTheirCourses: packagesWithTheirCourses(state),
});

export default connect(mapStateToProps)(TabPanelPaymentOnline);
