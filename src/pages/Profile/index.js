import React from "react";

import { connect } from "react-redux";
import UserProfile from "./Pages/UserProfile";
import { lastActivationSelector } from "../../redux/selectors/currentUser";

import "./UserProfile.css";

const Profile = ({ lastActivation }) => {
  const { is_expired } = lastActivation || { is_expired: false };

  return (
    <>
      {is_expired && (
        <div className="alert alert-warning mx-auto w-50  text-center">
          <strong className="pr-1">Զգուշացում. </strong> Ձեր հաշիվը
          ժամանակավորապես սառեցվել է, խնդրում ենք կատարել վճարում։
        </div>
      )}
      <UserProfile />
    </>
  );
};

const mapStateToProps = (state) => ({
  lastActivation: lastActivationSelector(state),
});

export default connect(mapStateToProps)(Profile);
