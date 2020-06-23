import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import ThidStep from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

function SignUp() {
  const { t } = useTranslation(["forms"]);
  const [next, setNext] = useState("one");

  const [finalState, setFinalState] = useState({});

  const getFinalState = () => {
    return finalState;
  };

  const nextFunc = (e) => {
    setNext(e);
  };
  const prevFunc = (e) => {
    setNext(e);
  };

  const set = (e) => {
    setFinalState((old) => {
      return { ...old, ...e };
    });
  };
  let p1 = "";

  const change = () => {
    if (next === "one") {
      p1 = (
        <SectionOne
          nextProps={nextFunc}
          prevProps={prevFunc}
          set={set}
          obj={finalState}
        />
      );
    } else if (next === "two") {
      p1 = (
        <SectionTwo
          nextProps={nextFunc}
          prevProps={prevFunc}
          title={finalState}
          set={set}
        />
      );
    } else if (next === "three") {
      p1 = (
        <ThidStep
          nextProps={nextFunc}
          prevProps={prevFunc}
          set={set}
          finalStateThree={finalState}
        />
      );
    } else if (next === "four") {
      p1 = <SectionFour prevProps={prevFunc} nextProps={nextFunc} set={set} />;
    } else if (next === "five") {
      p1 = <SectionFive prevProps={prevFunc} getFinalState={getFinalState} />;
    }
  };

  change();

  return (
    <div
      className="sigin-form text-center show"
      id="form2"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="formsign"
      style={{ paddingRight: "15px", display: "block" }}
    >
      <div className="modal-dialog ls">
        <div className="modal-content">
          <div className="modal-header">
            <Link to="/signin" className="btn btn-maincolor btn-login">
              {t("signin.title")}
            </Link>
            <h6 className="modal-title" id="formsign">
              {t("signup.title")}
            </h6>
          </div>

          <div className="modal-body">
            {p1}
            <div className="modal-footer">
              {t("signup.have_an_account")}
              <Link to="/signin" className="btn-sign px-10 fw-600">
                <u>{t("signin.title")}</u>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
