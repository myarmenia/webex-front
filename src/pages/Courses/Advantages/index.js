import React from "react";
import { useTranslation } from "react-i18next";
import { Advantage } from "./Advantage";
import { Headline } from "../HeadLine/HeadLine";

const advantagesCount = [0, 1, 2, 3, 4, 5]; // six items just for mapping
const sectionTagClasses = `ls s-pt-60 s-pb-10 s-pt-lg-100 s-pb-lg-30 c-gutter-10 c-mb-20 category-section`;

const Advantages = () => {
  const { t } = useTranslation(["main"]);
  const advantages = advantagesCount.map((item) => (
    <Advantage
      icon={t(`advantages.${item}.icon`)}
      title={t(`advantages.${item}.title`)}
      text={t(`advantages.${item}.text`)}
      key={item}
    />
  ));

  return (
    <section className={sectionTagClasses} id="categories">
      <div className="container">
        <div className="row">
          <Headline
            mainTitle={t("advantages.main_title")}
            shortText={t("advantages.short_text")}
          />
          <div className="divider-10 d-none d-lg-block" />
          {advantages}
        </div>
      </div>
    </section>
  );
};
export default Advantages;
