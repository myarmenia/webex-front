import React from "react";

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const WebexNavLink = ({
  activeClassName = "active",
  className = "",
  exact = false,
  to = "/",
  name = "Գլխավոր",
  child = "",
  handleClick = () => {},
  ...rest
}) => (
  <NavLink
    activeClassName={activeClassName}
    className={className}
    exact={exact}
    to={to}
    onClick={handleClick}
    {...rest}
  >
    {child}
    {name}
  </NavLink>
);

const WebexHashLink = ({
  activeClassName = "active",
  className = "",
  to = "/#home",
  name = "Գլխավոր",
  handleClick = () => {},
  ...rest
}) => (
  <HashLink
    activeClassName={activeClassName}
    className={className}
    to={to}
    onClick={handleClick}
    {...rest}
  >
    {name}
  </HashLink>
);

const WebexListLink = props => (
  <li>
    {props.hash ? <WebexHashLink {...props} /> : <WebexNavLink {...props} />}
  </li>
);

export default WebexListLink;
