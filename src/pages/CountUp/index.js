import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

import "./styles.css";

const Count = () => {
  const { t } = useTranslation(["main"]);
  const [scroll, setScroll] = useState(window.scrollY);
  const [top, setTop] = useState(0);
  useEffect(() => {
    detectTop();
  }, []);

  window.onscroll = () => {
    setScroll(window.scrollY);
    // console.log(scroll)
  };

  function detectTop() {
    let elem = document.getElementById("count");
    setTop(elem.offsetTop);
  }
  return (
    <div style={{ background: "linear-gradient(black,grey)", height: "auto" }}>
      <section className="ls s-pt-100 s-pb-100 s-pt-lg-100 s-pb-lg-100">
        <div className="container pt-30 pb-50">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-center m-0 counup-color">
                {t("countup.title")}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div className="main" id="count">
        <div className="flex_div">
          <p className="name">{t("countup.vid_lessons")}</p>
          {scroll > top - 500 ? (
            <CountUp className="count" start={1} end={99} delay={0.2} />
          ) : (
            ""
          )}
        </div>
        <div className="flex_div bord">
          <p className="name">{t("countup.students")} </p>
          {scroll > top - 500 ? (
            <CountUp className="count" start={1} end={971} delay={0.2} />
          ) : (
            ""
          )}
        </div>
        <div className="flex_div">
          <p className="name">{t("countup.prog_langs")}</p>
          {scroll > top - 500 ? (
            <CountUp className="count" start={1} end={10} delay={0.2} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default Count;
