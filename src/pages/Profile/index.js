import React from "react";

import { connect } from "react-redux";
import UserProfile from './Pages/UserProfile';
import './UserProfile.css';

const Profile = ({ currentUser }) => {
  return (
    <>
    <p className="text-center">Hello, {currentUser.user.name}</p>
    <UserProfile />
    </>
  ) ;
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Profile);
