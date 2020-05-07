import React from "react";
import { useTranslation } from "react-i18next";
import { Headline } from "../../Courses/HeadLine/HeadLine";

import NewsList from "./NewsList";
import lastNewsList from "./newsMock";
const sectionTagClasses = `ls s-pt-60 s-pb-10 s-pt-lg-100 s-pb-lg-30 c-gutter-10 c-mb-20 category-section`;

const LastNews = () => {
  const { t } = useTranslation(["main"]);

  return (
    <section className={sectionTagClasses} id="lastNews">
      <div className="container">
        <div className="row">
          <Headline
            mainTitle={t("lastnews.main_title")}
            shortText={t("lastnews.short_text")}
          />
          <div className="divider-10 d-none d-lg-block" />

          <NewsList
            newslist={lastNewsList}
            author={t("lastnews.author")}
            minutes={t(`courses.flipcard.minutes`)}
          />
        </div>
      </div>
    </section>
  );
};
export default LastNews;
