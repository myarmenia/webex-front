import React from "react";

import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import LinearProgress from "@material-ui/core/LinearProgress";

import { buttonSwitch } from "../../../../../../../redux/reducers/switchingTabPanels";
import { switchingNameTabPanels } from "../../../../../../../redux/actions/switchingNameTabPanels/";

function Information({
  startDate,
  endDate,
  monthNumber,
  dayNumber,
  isPaid,
  activations,
}) {
  const letDispatch = useDispatch();
  const { t } = useTranslation(["profile"]);
  const paymentButton = buttonSwitch.reduce((hash, button, index) => {
    if (button === "make_payment") hash["id"] = index;
    hash["buttonText"] = button;
    return hash;
  }, {});

  const BorderLinearProgress = LinearProgress;
  const coefficient = 8.333;
  const fillProgress = dayNumber * coefficient;

  const dayNumberText = `${t(
    `tabPanels.financial_data.lesson`
  )} - ${dayNumber}`;
  const monthNumberText = `${t(
    `tabPanels.financial_data.month`
  )} - ${monthNumber}`;

  const onlyDate = (dateString) => {
    const datePart = dateString.split(" ")[0];
    return datePart.replace(/-/g, ".");
  };

  return (
    <>
      <Box display="flex" justifyContent="space-around">
        <Box p={1} className="training-schedule">
          <p className="textParagraph">
            {t(`tabPanels.financial_data.payment_status`)}
          </p>
        </Box>
        <Box p={1} className="training-schedule">
          <p className="textParagraph">
            {t(`tabPanels.financial_data.payment_date`)}
          </p>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column">
        {activations.map((a, i) => (
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            key={i}
          >
            <Box p={1}>
              {a.is_paid ? (
                <span className="text-info">
                  {t("tabPanels.financial_data.is_paid")} 50.000
                </span>
              ) : (
                <span className="text-danger">
                  {t(`tabPanels.financial_data.is_not_paid`)}
                </span>
              )}
            </Box>

            <Box p={1}>
              {a.is_paid ? (
                <span className="textParagraph">
                  {onlyDate(a.activation_date)} - {onlyDate(a.expiration_date)}
                </span>
              ) : (
                <span className="textParagraph">
                  <button
                    onClick={() =>
                      letDispatch(switchingNameTabPanels(paymentButton.id))
                    }
                  >
                    {t(`tabPanels.${paymentButton.buttonText}.title`)}
                  </button>
                </span>
              )}
            </Box>
          </Box>
        ))}
      </Box>
      <ListItem>
        <Grid className="pt-20px ml-12px" container>
          <Grid container>
            <Grid item sm={12} xs={12}>
              <h6 className="training-schedule">
                <strong className="underline">
                  {t(`tabPanels.financial_data.class_attendance`)}
                </strong>
              </h6>
            </Grid>
            <Grid item sm={6} xs={6}>
              <p className="textParagraph">
                {t(`tabPanels.financial_data.by_months`)}
              </p>
              <p className="textProgressBar">{monthNumberText}</p>
            </Grid>
            <Grid item sm={6} xs={6}>
              <p className="textParagraph">
                {t(`tabPanels.financial_data.by_days`)}
              </p>
              <BorderLinearProgress
                className="progressBar"
                variant="determinate"
                value={fillProgress}
              />
              <p className="textProgressBar">{dayNumberText}</p>
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
    </>
  );
}

export default Information;
