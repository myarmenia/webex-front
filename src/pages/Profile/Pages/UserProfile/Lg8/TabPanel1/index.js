import React from "react";
import { connect } from "react-redux";
// import Chart from "./Chart/";
import Information from "./Information/";

import {
  activationsSelector,
  lastActivationSelector,
} from "../../../../../../redux/selectors/currentUser";
import { defaultActivation } from "../../../../../../redux/reducers/currentUser";

function TabPanel1({ activations, lastActivation = defaultActivation }) {
  const { length: monthNumber = 1 } = activations;
  const {
    activation_date,
    expiration_date,
    attendances_count,
    is_paid,
  } = lastActivation; //|| defaultActivation;

  return (
    <>
      <Information
        {...Object.assign(
          {},
          {
            startDate: activation_date,
            endDate: expiration_date,
            monthNumber,
            dayNumber: attendances_count,
            isPaid: is_paid,
            activations,
          }
        )}
      />
      {/* <Chart /> */}
    </>
  );
}
const mapStateToProps = (state) => ({
  activations: activationsSelector(state),
  lastActivation: lastActivationSelector(state),
});

export default connect(mapStateToProps)(TabPanel1);
