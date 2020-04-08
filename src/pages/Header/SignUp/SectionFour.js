import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import { API_SIGNUP_URL } from "../../../redux/config";

// Congratulations! You’ve passed the registration for stationary education
// in Webex. For account verification please follow the link.

// this messages will be with their translations
const successMessage = `Congratulations! You’ve passed the registration for stationary education
in Webex. For account verification please check your email from webex and folow the link.`;

const errorMessage = `Something went wrong. Your regitration was failed. 
Please, try again or contact to administrator`;

function SectionFour(props) {
  const [respStatus, setRespStatus] = useState("");

  const applyResult = (res) => {
    console.log(res);
    const { save_status = "" } = res;
    if (save_status) {
      let status = save_status === "success" ? save_status : "danger";
      setRespStatus(status);
    } else {
      console.log("back-end validator messages");
      setRespStatus("danger");
    }
  };
  const prepareRequest = () => {
    console.log(props.getFinalState());
    fetch(API_SIGNUP_URL, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.getFinalState()),
    })
      .then((res) => res.json())
      .then((res) => applyResult(res));
  };

  return (
    <div className="mt-3">
      <div className="form-title">
        <h2>Dear student</h2>
      </div>

      <img src={require(`../../../img/smiling.png`)} />
      <p className="mt-2">
        Complete your registration by clicking on "Registration" button.
      </p>

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
        id="buttonColor"
        onClick={prepareRequest}
      >
        Registration
      </Button>
    </div>
  );
}

export default SectionFour;
