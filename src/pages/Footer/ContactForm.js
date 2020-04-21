import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import "./form.css";
// const styled = styled.default;
const MessageDivs = styled.div`
  font-size: 14px;
  padding-left: 8px;
`;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  menu: {
    width: 200,
    height: 20,
  },
  cssLabel: {
    background: "#222a35",
    height: 20,
    color: "#fff",
    "&$cssFocused": {
      color: "#fff ",
    },
  },
  cssOutlinedInput: {
    //   height: 56,
    borderColor: "#fff",
    "&:hover $notchedOutline": {
      borderColor: "#fff",
    },
    "&$cssFocused $notchedOutline": {
      borderColor: "#fff",
      color: "#fff ",
    },
  },
  notchedOutline: {
    borderColor: "#888",
  },
  cssFocused: {},
}));

const ContactForm = ({ formTitle }) => {
  const { t } = useTranslation(["forms", "translation"]);
  const classes = useStyles();
  const [error, setError] = React.useState({
    messagename: "",
    messageemail: "",
    messagetel: "",
    messagetext: "",
    messageall: "",
  });
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const onChange = (type, value) => {
    setValues({
      ...values,
      [type]: value,
    });
  };
  let er = "",
    ern = "",
    erm = "",
    ertel = "",
    ert = "";

  function send() {
    if (
      !values.name.length ||
      !values.tel.length ||
      !values.email.length ||
      !values.message.length
    ) {
      er = t("messages.fill_all"); // "Fill in all the fields";
    }
    if (values.name.length < 3 || !isNaN(values.name)) {
      ern = t("messages.at_least_3_char"); // "Please enter at least 3 characters";
    }
    if (
      !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(values.email)
    ) {
      erm = t("messages.email_is_invalid");
    }
    if (values.tel.length < 10) {
      ertel = t("messages.at_least_10_char");
    }

    if (values.message.length < 3) {
      ert = t("messages.at_least_3_char");
    }

    setError({
      messagename: ern,
      messageemail: erm,
      messagetel: ertel,
      messagetext: ert,
      messageall:
        !erm && !ern && !ertel && !ert
          ? t("messages.request_has_been_sent")
          : er,
    });
  }
  return (
    <>
      <h3 className="widget-title" id="footer_h3">
        {formTitle}
      </h3>
      <div className="form" id="form">
        <TextField
          id="outlined-name"
          label={t("labels.name")}
          placeholder={t("labels.name")}
          className={classes.textField}
          type="text"
          name="name"
          onChange={(e) => onChange("name", e.target.value)}
          // halfWidth
          value={values.name}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <MessageDivs>{error.messagename}</MessageDivs>
        <TextField
          id="outlined-email-input"
          label={t("labels.email")}
          className={classes.textField}
          type="email"
          name="email"
          onChange={(e) => onChange("email", e.target.value)}
          // halfWidth
          value={values.email}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <MessageDivs>{error.messageemail}</MessageDivs>
        <TextField
          id="outlined-input"
          label={t("labels.phone")}
          className={classes.textField}
          type="text"
          name="tel"
          onChange={(e) => onChange("tel", e.target.value)}
          // halfWidth
          // style={{height: '40px'}}
          value={values.tel}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <MessageDivs>{error.messagetel}</MessageDivs>
        <TextField
          id="outlined-textarea-input"
          variant="outlined"
          rows="3"
          onChange={(e) => onChange("message", e.target.value)}
          // halfWidth
          value={values.message}
          // fullWidth
          label={t("labels.message")}
          placeholder={t("labels.message")}
          multiline
          style={{ width: "240px" }}
          className={classes.textField}
          margin="normal"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <MessageDivs>{error.messagetext}</MessageDivs>
        <div>
          <button
            onClick={send}
            type="submit"
            id="contact_form_submit"
            name="contact_submit"
            className="btn btn-maincolor"
            style={{ width: "240px" }}
          >
            {t("translation:buttons.send_message")}
          </button>
        </div>
        <MessageDivs>{error.messageall}</MessageDivs>
      </div>
    </>
  );
};
export default ContactForm;
