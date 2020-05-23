import React from "react";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import UpdateButton from "../../../../Components/forms/UpdateButton";
import formStyles from "../../../../Components/forms/formStyles";
import Discounts from "./Discounts";

import pricesForMonths from "./pricesForMonths";
import api from "../../../../../../redux/api";

const useStyles = makeStyles(formStyles);

const TabPanel4 = () => {
  const { t } = useTranslation(["profile"]);
  const { container = {}, inputField = {}, title = {} } = useStyles();
  const [price, setPrice] = React.useState(pricesForMonths[0]);
  const [respError, setRespError] = React.useState(false);

  const handleChange = (event) => {
    const price = pricesForMonths.filter(
      ({ value }) => value === event.target.value
    )[0];
    setPrice(price);
  };

  const goToACBA = async () => {
    const { value: base_cost } = pricesForMonths[0];
    const { value, label } = price;
    const language = localStorage.getItem("language");

    let acbaQuery = `?amount=${value}&months=${label}&base_cost=${base_cost}`;
    acbaQuery += `&currency=051&language=${language}`;

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
      <Discounts titleClassName={title} />
      <hr />
      <div className="text-center text-danger mb-2 fs-18 px-3">
        {respError ? t("tabPanels.make_payment.payment_errors") : ""}
      </div>
      <div className={`${container} mb-30`}>
        <div className="col-md-6 col-lg-4">
          <TextField
            id="select-months"
            select
            label={t("tabPanels.make_payment.label")}
            value={price.value}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            className={inputField}
          >
            {pricesForMonths.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <div className="col-md-6 col-lg-4 text-center">
          <div className="selected-month-price">
            <span className="px-2 fw-600">{price.value}</span>
            <span>{t("tabPanels.make_payment.dram")}</span>
          </div>
        </div>
        <UpdateButton
          wrapperClassName="col-md-12 col-lg-4 text-center"
          handleClick={goToACBA}
          buttonText={t("tabPanels.make_payment.submit")}
        />
      </div>
    </>
  );
};

export default TabPanel4;
