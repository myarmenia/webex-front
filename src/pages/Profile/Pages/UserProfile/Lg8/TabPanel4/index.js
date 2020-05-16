import React from "react";
import { useTranslation } from "react-i18next";
import {useSelector} from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import UpdateButton from "../../../../Components/forms/UpdateButton";
import formStyles from "../../../../Components/forms/formStyles";
import Discounts from "./Discounts";

import pricesForMonths from "./pricesForMonths";
import { API_ACBA_MAKE_ORDER } from "../../../../../../redux/config.js"; 

const useStyles = makeStyles(formStyles);

const TabPanel4 = () => {
  const { t } = useTranslation(["profile"]);
  const {
    container = {},
    inputField = {},
    title = {},
  } = useStyles();
  const [price, setPrice] = React.useState(pricesForMonths[0]);
  const [respError, setRespError ] = React.useState(false);

  const handleChange = (event) => {
    const price = pricesForMonths.filter(
      ({ value }) => value === event.target.value
    )[0];
    setPrice(price);
  };

  const { id = 0, email = "", online=false } = useSelector((state) => state.currentUser.user);
  const goToACBA = () => {
    const {value: base_cost} = pricesForMonths[0];
    const {value, label } = price;
    const language = localStorage.getItem('language');

    let apiMakeOrder = `${API_ACBA_MAKE_ORDER}?user_id=${id}`;
    apiMakeOrder += `&amount=${value}&months=${label}&base_cost=${base_cost}`;
    apiMakeOrder += `&currency=051&language=${language}`;

    fetch(apiMakeOrder, {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        if(resp.curl_error || resp.errorMessage) {
          console.log('you have error on your payment')
          setRespError(true);
          setTimeout(()=>{
            setRespError(false);
          }, 5000)
        }
        if(resp.formUrl) {
          window.location.assign(resp.formUrl)
        }
      })
      .catch(function (error) {
        console.error(error);
      });  
  };
  

  return (
    <>
      <div className="form-title mt-30">
        <h6 className={title}>{t("tabPanels.make_payment.discount_system")}</h6>
      </div>
      <Discounts />
      <hr/>
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
