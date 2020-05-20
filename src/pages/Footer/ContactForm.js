import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import api from "../../redux/api";

import "./form.css";
// const styled = styled.default;
const MessageDivs = styled.div`
  font-size: 14px;
  padding-left: 8px;
  color: #f96c6c;
`;
const MessageSuccess = styled.div`
  font-size: 14px;
  padding-left: 8px;
  color: #55e67b;
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

const defaultErrors = {
  messagename: "",
  messageemail: "",
  messagetel: "",
  messagetext: "",
  messageall: "",
};

const ContactForm = ({ formTitle }) => {
  const { t } = useTranslation(["forms", "translation"]);
  const classes = useStyles();
  const [error, setError] = React.useState(defaultErrors);
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const [responseSuccess, setResponseSuccess] = React.useState("");
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

  const send = () => {
    setError(defaultErrors);
    setResponseSuccess("");
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
      messageall: er,
    });

    // console.log('error', error)
    // console.log('values', values)

    if (er === "" && ern === "" && erm === "" && ertel === "" && ert === "") {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    const response = await api.contactMail(values);
    console.log(response);
    if (response && response.status === 200 && response.data.mail_sent) {
      setResponseSuccess(t("messages.mail_sent_success"));
      setTimeout(() => {
        setResponseSuccess("");
      }, 3000);
    } else {
      setError({ messageall: t("messages.mail_sent_error") });
      setTimeout(() => {
        setError({ messageall: "" });
      }, 3000);
    }
  };

  return (
    <>
      <h3 className="widget-title pl-3" id="footer_h3">
        {formTitle}
      </h3>
      <div className="form text-center" id="form">
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
        <MessageSuccess>{responseSuccess}</MessageSuccess>
      </div>
    </>
  );
};
export default ContactForm;
