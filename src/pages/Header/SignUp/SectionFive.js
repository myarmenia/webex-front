import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import auth from "../../../redux/auth";
import { CircularProgress, Button } from "@material-ui/core";

function SectionFive(props) {
  const { t } = useTranslation(["forms"]);
  const successMessage = t("signup.success_stationary");
  const errorMessage = t("signup.error_stationary");
  const [respStatus, setRespStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const applyResult = (res) => {
    const { save_status = "" } = res;
    if (save_status) {
      let status = save_status === "success" ? save_status : "danger";
      setRespStatus(status);
    } else {
      setRespStatus("danger");
    }
    setLoading(false);
  };

  const prepareRequest = async () => {
    try {
      setLoading(true);
      const response = await auth.signUp(props.getFinalState());
      applyResult(response.data);
    } catch (e) {
      setLoading(false);
      setRespStatus("danger");
    }
  };

  return (
    <div className="mt-3">
      <div className="form-title">
        <h2>{t("signup.dear_student")}</h2>
      </div>

      <img src={require(`../../../img/smiling.png`)} alt="Smiling face" />
      <p className="mt-2">{t("signup.complate_by_click_on")}</p>

      {respStatus && (
        <>
          {respStatus === "success" ? (
            <p className="mt-2 cs cs-success px-10 py-10 rounded">
              {successMessage}
            </p>
          ) : (
            <p className="mt-2 cs cs-danger px-10 py-10 rounded">
              {errorMessage}
            </p>
          )}
        </>
      )}

      <Button
        variant="contained"
        size="large"
        onClick={prepareRequest}
        disabled={loading}
      >
        {loading && <CircularProgress size={20} className="mr-2" />}
        {t("signup.title")}
      </Button>
    </div>
  );
}

export default SectionFive;
