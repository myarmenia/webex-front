import React from "react";

import { connect } from "react-redux";

const Profile = ({ currentUser }) => {
  return <h1>Hello, {currentUser.user.name}</h1>;
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Profile);
