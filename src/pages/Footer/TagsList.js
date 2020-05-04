import React from "react";
import TagItem from "./TagItem";
import { tags as mocks } from "./mocks";

const TagsList = ({ tags, authenticated, courses }) => (
  <div className="tagcloud">
    <h3 className="widget-title">{tags}</h3>
    {mocks.map((item, index) => {
      const { name, id } = item;
      const link = !authenticated ? `/demo/${id}` : `/courses/${id}`;

      return <TagItem name={name} tagLink={link} key={index} />;
    })}
  </div>
);

export default TagsList;
