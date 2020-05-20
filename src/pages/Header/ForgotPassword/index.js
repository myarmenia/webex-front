import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTranslation } from "react-i18next";

import { connect } from "react-redux";

import api from "../../../redux/api";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "400px",
  },
}));

const ForgotPasswordForm = (props) => {
  const { t } = useTranslation(["forms"]);
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const [status, setStatus] = useState({ success: false, message: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.passwordResetRequest(email);
      const { message, success } = response.data;
      success && setEmail("");
      setStatus({
        message,
        status,
      });
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  return (
    <div
      className="sigin-form text-center show"
      tabIndex="-1"
      style={{ paddingRight: "15px", display: "block" }}
    >
      <div className="modal-dialog ls">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">{t("forgot_password.title")}</h6>
            <Link to="/signup" className="btn btn-maincolor btn-sign">
              {t("signup.title")}
            </Link>
          </div>
          <div className="modal-body">
            <div className="form-title">
              <h4>{t("forgot_password.title")}</h4>
              {error && (
                <span className="text-danger msg-17rem">
                  {t("forgot_password." + error)}
                </span>
              )}
              <span
                className={`text-${
                  status.success ? "success" : "danger"
                } msg-17rem`}
              >
                {status.message}
              </span>
            </div>
            <form
              className={classes.container}
              noValidate
              onSubmit={handleSubmit}
            >
              <TextField
                label={t("labels.email")}
                className={classes.textField}
                type="email"
                name="email"
                value={email}
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                className="btn btn-maincolor"
                style={{ margin: "0 auto" }}
              >
                {loading && <CircularProgress size={20} />}
                {t("forgot_password.title")}
              </Button>
            </form>
            <div className="modal-footer">
              <p>
                <Link to="/signin" className="btn-sign px-10 fw-600">
                  <u>{t("signin.title")}</u>
                </Link>
              </p>
              {t("signin.dont_have_an_account")}
              <Link to="/signup" className="btn-sign px-10 fw-600">
                <u>{t("signup.title")}</u>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
