import React from "react";
import { useTranslation } from "react-i18next";

import PopularItem from "./PopularItem";

function Popular({ newslist }) {
  const { t } = useTranslation(["main"]);
  // console.log(newslist);
  return (
    <div className="widget widget_popular_entries">
      <h3 className="widget-title">
        <i className="fa fa-newspaper-o pr-2"></i>
        <span>{t("lastnews.main_title")}</span>
      </h3>
      <ul className="list-unstyled">
        {newslist.map((item, index) => (
          <PopularItem {...Object.assign({}, { ...item })} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Popular;
