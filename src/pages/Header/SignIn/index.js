import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTranslation } from "react-i18next";

import { connect } from "react-redux";

import { SignIn } from "../../../redux/actionCreators/signin";

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

const SignInForm = (props) => {
  const { t } = useTranslation(["forms"]);
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const writeEmail = (e) => {
    setEmail(e.target.value);
  };

  const writePassword = (e) => {
    setPassword(e.target.value);
  };

  const getData = (event) => {
    event.preventDefault();
    let data = { email, password };
    props.SignIn(data, () => window.location.assign("/profile"));
  };
  return (
    <div
      className="sigin-form text-center show"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="formsign"
      style={{ paddingRight: "15px", display: "block" }}
    >
      <div className="modal-dialog ls">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="formlogin">
              {t("signin.title")}
            </h6>
            <Link to="/signup" className="btn btn-maincolor btn-sign">
              {t("signup.title")}
            </Link>
          </div>
          <div className="modal-body">
            <div className="form-title">
              <h2>{t("signin.title")}</h2>
              <p>{t("signin.description")}</p>
              <span className="text-danger">{props.currentUser.error}</span>
            </div>
            <form className={classes.container} noValidate onSubmit={getData}>
              <TextField
                id="outlined-email-input"
                label={t("labels.email")}
                className={classes.textField}
                type="email"
                name="email"
                value={email}
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={writeEmail}
              />

              <TextField
                id="outlined-password-input"
                label={t("labels.password")}
                className={classes.textField}
                type="password"
                name="password"
                value={password}
                autoComplete="password"
                margin="normal"
                variant="outlined"
                onChange={writePassword}
              />

              {/* <div className="social-account">
								<h6>
									or
							</h6>
								<h6>
									Sign up with your Social Account
							</h6>
								<span className="social-icons">
									<a href="#" className="fa fa-facebook " title="facebook"></a>
									<a href="#" className="fa fa-twitter " title="twitter"></a>
									<a href="#" className="fa fa-paper-plane " title="telegram"></a>
									<a href="#" className="fa fa-linkedin " title="linkedin"></a>
									<a href="#" className="fa fa-instagram " title="instagram"></a>
									<a href="#" className="fa fa-youtube-play " title="youtube"></a>
								</span>
							</div> */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember"
                />
                <label className="form-check-label" htmlFor="remember">
                  {t("signin.keep_logged")}
                </label>
              </div>
              {props.currentUser.loading && <CircularProgress />}
              <Button
                type="submit"
                variant="contained"
                size="large"
                id="buttonColor"
                className="btn btn-maincolor log-btn"
                style={{ margin: "0 auto" }}
              >
                {t("signin.title")}
              </Button>
            </form>
            <div className="modal-footer">
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

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  SignIn: (credentials, redirect) => dispatch(SignIn(credentials, redirect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
