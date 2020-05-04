import React from "react";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useTranslation } from "react-i18next";

function Information({ startDate, endDate, monthNumber, dayNumber, isPaid }) {
  const { t } = useTranslation(["profile"]);

  const BorderLinearProgress = LinearProgress;
  const coefficient = 8.333;
  const fillProgress = dayNumber * coefficient;

  const paidStatus = isPaid ? (
    <span className="blue">{t("tabPanels.financial_data.is_paid")}</span>
  ) : (
    <span className="red">{t(`tabPanels.financial_data.is_not_paid`)}</span>
  );

  const paidDate = isPaid ? <span>{startDate}</span> : <span>--\--</span>;
  const dayNumberText = `${t(
    `tabPanels.financial_data.lesson`
  )} - ${dayNumber}`;
  const monthNumberText = `${t(
    `tabPanels.financial_data.month`
  )} - ${monthNumber}`;

  return (
    <>
      <ListItem>
        <Grid className="pt-20px ml-12px" container>
          <Grid className="pb-30px" container>
            <Grid item sm={6}>
              <p className="textParagraph">
                {t(`tabPanels.financial_data.payment_status`)}
              </p>
              <p className="textProgressBar">{paidStatus}</p>
            </Grid>
            <Grid item sm={6}>
              <p className="textParagraph">
                {t(`tabPanels.financial_data.payment_date`)}
              </p>
              <p className="textProgressBar">{paidDate}</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={12}>
              <h6 className="training-schedule">
                <strong className="underline">
                  {t(`tabPanels.financial_data.class_attendance`)}
                </strong>
              </h6>
            </Grid>
            <Grid item sm={6}>
              <p className="textParagraph">
                {t(`tabPanels.financial_data.by_months`)}
              </p>
              <p className="textProgressBar">{monthNumberText}</p>
            </Grid>
            <Grid item sm={6}>
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
