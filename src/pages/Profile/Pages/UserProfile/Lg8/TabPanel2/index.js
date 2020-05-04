import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";

import ResponseMessageWrap from "../../../../../../components/messages/ResponseMessageWrap";
import FormTextField from "../../../../Components/forms/FormTextField";
import FormFieldHelper from "../../../../Components/forms/FormFieldHelper";
import UpdateButton from "../../../../Components/forms/UpdateButton";

import { API_UPDATE_USER_URL } from "../../../../../../redux/config";
import { getUserData } from "../../../../../../redux/actionCreators/signin";

import formStyles from "../../../../Components/forms/formStyles";
import "react-phone-number-input/style.css";

const useStyles = makeStyles(formStyles);

function TabPanel6() {
  const { t } = useTranslation(["forms", "translation"]);
  const {
    container = {},
    inputField = {},
    helper = {},
    title = {},
    readField = {},
  } = useStyles();

  const {
    id: idValue = 0,
    name: nameValue = "",
    last_name: lastNameValue = "",
    email: emailValue = "",
    phone: phoneValue = "",
  } = useSelector((state) => state.currentUser.user);
  const letDispatch = useDispatch();

  const [name, setName] = useState(nameValue);
  const [lastName, setLastName] = useState(lastNameValue);
  const [phone, setPhone] = useState(phoneValue);

  const [nameValidation, setNameValidation] = useState("");
  const [lastNameValidation, setLastNameValidation] = useState("");
  const [phoneValidation, setPhoneValidation] = useState("");
  const [respStatus, setRespStatus] = useState("");

  const changeName = (e) => {
    setNameValidation("");
    setName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastNameValidation("");
    setLastName(e.target.value);
  };

  const changePhone = (e) => {
    setPhone(e);
    setPhoneValidation("");
  };

  const sendRequest = () => {
    console.log("hop, hey lala-ley", idValue);
    if (!name) {
      setNameValidation(t("messages.is_required"));
    } else if (name.length < 2) {
      setNameValidation(t("messages.at_least_2_char"));
    } else if (!lastName) {
      setLastNameValidation(t("messages.is_required"));
    } else if (lastName.length < 2) {
      setLastNameValidation(t("messages.at_least_2_char"));
    } else if (phone === "") {
      setPhoneValidation(t("messages.is_required"));
    } else if (isValidPhoneNumber(phone) !== true) {
      setPhoneValidation(t("messages.enter_valid_phone"));
    } else {
      let objNames = {
        id: idValue,
        name,
        last_name: lastName,
        email: emailValue,
        phone,
      };
      console.log("objNames-", objNames);
      updateUserData(objNames);
    }
  };

  const updateUserData = (objNames) => {
    fetch(API_UPDATE_USER_URL, {
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
        letDispatch(getUserData());
      }, 1500);
    } else {
      console.log("back-end validator messages");
      setRespStatus("error");
    }
  };

  return (
    <>
      <div className="form-title">
        <h6 className={title}>{t("update.title")}</h6>
      </div>

      {respStatus && (
        <ResponseMessageWrap
          status={respStatus}
          message={t(`update.${respStatus}`)}
        />
      )}

      <div className={container}>
        <div className={readField}>
          <span>{emailValue}</span>
        </div>

        <FormTextField
          filedLabel={t("labels.name") + "*"}
          fieldClassName={inputField}
          fieldName="name"
          handleChange={changeName}
          fieldValue={name}
        />

        <FormFieldHelper
          fieldValidation={nameValidation}
          helperClassName={`${inputField} ${helper}`}
        />

        <FormTextField
          filedLabel={t("labels.last_name") + "*"}
          fieldClassName={inputField}
          fieldName="last_name"
          handleChange={changeLastName}
          fieldValue={lastName}
        />

        <FormFieldHelper
          fieldValidation={lastNameValidation}
          helperClassName={`${inputField} ${helper}`}
        />

        <PhoneInput
          placeholder={t("placeholders.enter_phone_number")}
          value={phone}
          displayInitialValueAsLocalNumber={true}
          onChange={changePhone}
          className={inputField}
        />

        <FormFieldHelper
          fieldValidation={phoneValidation}
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

export default TabPanel6;
