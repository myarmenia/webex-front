import React from "react";
import { Link } from "react-router-dom";

const TagItem = ({ name, tagLink }) => {

  return (
    <Link className="tag-cloud-link" to={tagLink}>
      {name}
    </Link>
  );
};

export default TagItem;
