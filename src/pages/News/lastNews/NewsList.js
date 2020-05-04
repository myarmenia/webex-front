import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ newslist, author, minutes }) =>
  newslist.map((item, index) => (
    <NewsCard
      key={index}
      {...({},
      {
        ...item,
        author,
        minutes,
      })}
    />
  ));

export default NewsList;
