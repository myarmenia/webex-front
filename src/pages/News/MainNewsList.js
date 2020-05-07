import React from "react";
import MainNewsItem from "./MainNewsItem";

const MainNewsList = ({ newslist }) => {
  return (
    <>
      {newslist.map((item, index) => (
        <MainNewsItem item={item} key={index} />
      ))}
    </>
  );
};

export default MainNewsList;
