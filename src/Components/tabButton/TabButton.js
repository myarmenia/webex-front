import React from "react";

const TabButton = ({ filter, title, active, handleClick }) => (
  <a
    href="/"
    className={active ? "active" : ""}
    data-filter={filter}
    onClick={handleClick}
  >
    {title}
  </a>
);

export default TabButton;
