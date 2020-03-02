import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import ThidStep from "./SectionThree";
import SectionFour from "./SectionFour";
import SingleCourse from "./singleCourse";

function SignUp() {
  const [next, setNext] = useState("one");

  const [finalState, setFinalState] = useState({});

  const nextFunc = e => {
    setNext(e);
  };
  const prevFunc = e => {
    setNext(e);
  };

  const set = e => {
    setFinalState(old => {
      return { ...old, ...e };
    });
  };
  console.log(finalState, "finalState");
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
      //p1 = <SingleCourse courseLang={next} />
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
          finalStateThree={finalState}
        />
      );
    } else if (next === "four") {
      p1 = <SectionFour prevProps={prevFunc} />;
    } else if (next === "Back End") {
      p1 = <SingleCourse courseLang={next} set={set} prevProps={prevFunc} />;
    } else if (next === "Front End") {
      p1 = <SingleCourse courseLang={next} set={set} prevProps={prevFunc} />;
    } else if (next === "Full Stack") {
      p1 = <SingleCourse courseLang={next} set={set} prevProps={prevFunc} />;
    } else if (next === "Back End") {
      p1 = <SingleCourse courseLang={next} set={set} prevProps={prevFunc} />;
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
              Sign In
            </Link>
            <h6 className="modal-title" id="formsign">
              Sign Up
            </h6>
          </div>

          <div className="modal-body">
            {p1}

            <div className="modal-footer">
              Already have an Alison account?
              <button type="button" className="btn-login">
                <a href="/signin">Log In</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
