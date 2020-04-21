import React from "react";

const TagItem = ({ name, link }) => {
  return (
    <a href={link} className="tag-cloud-link">
      {name}
    </a>
  );
};

export default TagItem;
