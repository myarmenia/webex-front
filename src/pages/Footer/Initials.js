import React from "react";
import logo from "../../img/logo.png";

const Initials = ({ slogan }) => (
  <>
    <a href="./" className="logo">
      <img src={logo} alt="" />
    </a>
    <p>{slogan}</p>
  </>
);

export default Initials;
