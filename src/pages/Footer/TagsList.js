import React from "react";
import TagItem from "./TagItem";
import { tags as mocks } from "./mocks";

const TagsList = ({ tags }) => (
  <div className="tagcloud">
    <h3 className="widget-title">{tags}</h3>
    {mocks.map((item, index) => (
      <TagItem {...item} key={index} />
    ))}
  </div>
);

export default TagsList;
