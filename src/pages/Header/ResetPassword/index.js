import React, { useState, useReducer, useCallback, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTranslation } from "react-i18next";

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

const initialState = {
  show: false,
  loadingShow: false,
  loading: false,
  error: null,
  response: { success: false, message: "" },
  form: {
    email: "",
    password: "",
    password_confirmation: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FORM":
      const { key, value } = action.payload,
        { form } = state;
      return { ...state, form: { ...form, [key]: value } };

    case "LOADING":
      return { ...state, loading: true };

    case "SHOW_LOADING":
      return { ...state, loadingShow: true };

    case "ERROR":
      return { ...state, error: action.error };

    case "SUCCESS":
      return { ...state, response: action.payload, loading: false };

    case "SET_SHOW":
      return { ...state, show: action.payload, loadingShow: false };

    default:
      return state;
  }
}

const ResetPassword = ({ match }) => {
  const { t } = useTranslation(["forms"]);
  const classes = useStyles();
  const [{ form, ...state }, dispatch] = useReducer(reducer, initialState);

  const token = match.params.token;

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    dispatch({ type: "SET_FORM", payload: { key, value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch("LOADING");
      dispatch({ type: "ERROR", error: null });
      const response = await api.resetPassword({ ...form, token });
      const { message, success } = response.data;
      dispatch({ type: "SUCCESS", payload: { message, success } });
    } catch (e) {
      dispatch({ type: "ERROR", error: e.message });
    }
  };

  const checkToken = useCallback(
    async (token) => {
      try {
        dispatch({ type: "SHOW_LOADING" });
        const response = await api.checkResetToken(token);
        if (response.data.success) {
          dispatch({ type: "SET_SHOW", payload: true });
          return false;
        }

        dispatch({ type: "SET_SHOW", payload: false });
      } catch (e) {
        dispatch({ type: "SET_SHOW", payload: false });
      }
    },
    [api, dispatch]
  );

  useEffect(() => {
    checkToken(token);
  }, [checkToken, token]);

  const renderFields = () => (
    <>
      <TextField
        label={t("labels.email")}
        className={classes.textField}
        type="email"
        name="email"
        value={form.email}
        autoComplete="email"
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        label={t("labels.password")}
        className={classes.textField}
        type="password"
        name="password"
        value={form.password}
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        label={t("labels.repeat_pass")}
        className={classes.textField}
        type="password"
        name="password_confirmation"
        value={form.password_confirmation}
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={state.loading}
        className="btn btn-maincolor"
        style={{ margin: "0 auto" }}
      >
        {state.loading && <CircularProgress size={20} />}
        {t("forgot_password.title")}
      </Button>
    </>
  );

  return (
    <div
      className="sigin-form text-center show"
      tabIndex="-1"
      style={{ paddingRight: "15px", display: "block" }}
    >
      <div className="modal-dialog ls">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-title">
              <h3>{t("forgot_password.title")}</h3>
              {state.error && (
                <span className="text-danger msg-17rem">
                  {t("forgot_password." + state.error)}
                </span>
              )}
              <span
                className={`text-${
                  state.response.success ? "success" : "danger"
                } msg-17rem`}
              >
                {state.response.message}
              </span>
            </div>
            <form
              className={classes.container}
              noValidate
              onSubmit={handleSubmit}
            >
              {state.show ? (
                renderFields()
              ) : state.loadingShow ? (
                <CircularProgress size={60} />
              ) : (
                <span className="text-danger">Invalid token</span>
              )}
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

export default ResetPassword;
