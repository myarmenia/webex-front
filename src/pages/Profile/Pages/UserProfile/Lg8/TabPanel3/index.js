import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import FormTextField from "../../../../Components/forms/FormTextField";
import FormFieldHelper from "../../../../Components/forms/FormFieldHelper";
import UpdateButton from "../../../../Components/forms/UpdateButton";

import {
  API_CHANGE_PASS_URL,
  API_CHECK_PASS_URL,
} from "../../../../../../redux/config";

import formStyles from "../../../../Components/forms/formStyles";
import ResponseMessageWrap from "../../../../../../Components/messages/ResponseMessageWrap";
const useStyles = makeStyles(formStyles);

function TabPanel5() {
  const { t } = useTranslation(["forms", "translation"]);
  const {
    container = {},
    inputField = {},
    helper = {},
    title = {},
  } = useStyles();

  const { id = 0, email = "" } = useSelector((state) => state.currentUser.user);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [passwordValidation, setPasswordValidation] = useState("");
  const [newPasswordValidation, setNewPasswordValidation] = useState("");
  const [repeatPasswordValidation, setRepeatPasswordValidation] = useState("");
  const [respStatus, setRespStatus] = useState("");

  const changePassword = (e) => {
    setPasswordValidation("");
    setPassword(e.target.value);
  };

  const checkPassword = (e) => {
    const passwordOnBlur = e.target.value;
    console.log(e.target.value);
    fetch(API_CHECK_PASS_URL, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, email, password: passwordOnBlur }),
    })
      .then((res) => res.json())
      .then(({ success }) => {
        console.log("res-status->", success);
        if (!success) {
          setPasswordValidation(t("messages.enter_current_password"));
        }
      });
  };

  const changeNewPassword = (e) => {
    setNewPasswordValidation("");
    if (password === e.target.value) {
      setNewPasswordValidation(t("messages.curr_and_new_are_same"));
    }
    setNewPassword(e.target.value);
  };

  const changeRepeatPassword = (e) => {
    setRepeatPasswordValidation("");
    if (newPassword !== e.target.value) {
      setRepeatPasswordValidation(t("messages.passwords_not_same"));
    }
    setRepeatPassword(e.target.value);
  };

  const sendRequest = () => {
    console.log("hop, hey lala-ley", id);
    if (!password) {
      setPasswordValidation(t("messages.is_required"));
    } else if (passwordValidation) {
      setPasswordValidation(t("messages.enter_current_password") + "3333");
    } else if (!newPassword) {
      setNewPasswordValidation(t("messages.is_required"));
    } else if (newPassword.length < 8) {
      setNewPasswordValidation(t("messages.at_least_8_char"));
    } else if (password === newPassword) {
      setNewPasswordValidation(t("messages.curr_and_new_are_same"));
    } else if (!repeatPassword) {
      setRepeatPasswordValidation(t("messages.is_required"));
    } else if (newPassword !== repeatPassword) {
      setRepeatPasswordValidation(t("messages.passwords_not_same"));
    } else {
      let objNames = {
        id,
        email,
        password,
        newPassword,
      };
      console.log("objNames-", objNames);
      udpatePassword(objNames);
    }
  };

  const udpatePassword = (objNames) => {
    fetch(API_CHANGE_PASS_URL, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objNames),
    })
      .then((res) => res.json())
      .then((res) => applyResult(res));
  };

  const applyResult = (res) => {
    console.log(res);
    const { save_status = "" } = res;
    if (save_status) {
      setRespStatus(save_status);
      setTimeout(() => {
        setRespStatus("");
      }, 2000);
    } else {
      console.log("back-end validator messages");
      setRespStatus("error");
    }
  };

  return (
    <>
      <div className="form-title">
        <h6 className={title}>{t("update.password.title")}</h6>
      </div>

      {respStatus && (
        <ResponseMessageWrap
          status={respStatus}
          message={t(`update.${respStatus}`)}
        />
      )}

      <div className={container}>
        <FormTextField
          filedLabel={t("labels.password") + "*"}
          fieldClassName={inputField}
          fieldType="text"
          fieldName="password"
          handleChange={changePassword}
          handleBlur={checkPassword}
          fieldValue={password}
        />

        <FormFieldHelper
          fieldValidation={passwordValidation}
          helperClassName={`${inputField} ${helper}`}
        />

        <FormTextField
          filedLabel={t("labels.new_pass") + "*"}
          fieldClassName={inputField}
          fieldType="text"
          fieldName="new_password"
          handleChange={changeNewPassword}
          fieldValue={newPassword}
        />

        <FormFieldHelper
          fieldValidation={newPasswordValidation}
          helperClassName={`${inputField} ${helper}`}
        />

        <FormTextField
          filedLabel={t("labels.repeat_pass") + "*"}
          fieldClassName={inputField}
          fieldType="text"
          fieldName="repeat_password"
          handleChange={changeRepeatPassword}
          fieldValue={repeatPassword}
        />

        <FormFieldHelper
          fieldValidation={repeatPasswordValidation}
          helperClassName={`${inputField} ${helper}`}
        />

        <UpdateButton
          wrapperClassName={inputField}
          handleClick={sendRequest}
          buttonText={t("update.submit")}
        />
      </div>
    </>
  );
}

export default TabPanel5;
