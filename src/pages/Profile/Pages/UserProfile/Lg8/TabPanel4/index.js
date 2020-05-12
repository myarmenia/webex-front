import React from "react";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import UpdateButton from "../../../../Components/forms/UpdateButton";
import formStyles from "../../../../Components/forms/formStyles";
import Discounts from "./Discounts";

import pricesForMonths from "./pricesForMonths";

const useStyles = makeStyles(formStyles);

const TabPanel4 = () => {
  const { t } = useTranslation(["profile"]);
  const {
    container = {},
    inputField = {},
    title = {},
  } = useStyles();
  const [price, setPrice] = React.useState(pricesForMonths[0]);

  const handleChange = (event) => {
    const price = pricesForMonths.filter(
      ({ value }) => value === event.target.value
    )[0];
    setPrice(price);
  };

  const goToACBA = () => {
    console.log("goToACBA");
    console.log("price", price);
    const on = "generate_string";
    const ci = "user_id";
    const postFields = `userName=34537544_api&password=Ah0545139&amount=${price.value}&currency=051&orderNumber=${on}&returnUrl=http://webex.am/simple4.php&language=en&clientID=${ci}&months=${price.label}`;

    const url = "https://ipay.arca.am/payment/rest/register.do";
    console.log('postFields', postFields)
    const request = `${url}?${postFields}`;
    console.log(request)
  };
  

  return (
    <>
      <div className="form-title mt-30">
        <h6 className={title}>{t("tabPanels.make_payment.discount_system")}</h6>
      </div>
      <Discounts />
      <hr/>
      <div className={`${container} my-30`}>
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
