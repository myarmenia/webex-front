import React from "react";

const TabButton = ({ filter, index, title, active, handleClick }) => (
  <a
    href=""
    className={active ? "active" : ""}
    data-filter={filter}
    data-index={index}
    onClick={handleClick}
  >
    {title}
  </a>
);

export default TabButton;
