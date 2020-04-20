import React from "react";
import Button from "@material-ui/core/Button";

function Section1({ t }) {
  return (
    <section className="ls s-pt-60 s-pb-60 s-py-lg-100 c-gutter-50 about-section text-center text-lg-left container-px-lg-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center"> {t("about.pre_title")} </h2>
            <h3 className="special-heading fw-300 text-center mb-0">
              {t("about.title")}
            </h3>
            <div className="row align-items-center">
              <div className="col-12 col-lg-5">
                <div className="about-image">
                  <img src={require("../../img/about_us/nikol.jpg")} alt="" />
                </div>
                <div className="divider-30 d-block d-lg-none"></div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="item-content">
                  <div className="d-none d-lg-block divider-35"></div>
                  <div className="row c-gutter-25">
                    <div className="divider-15 d-block d-lg-none"></div>
                    <div className="col-md-12 mb-20">
                      <p className="color-dark">{t("about.text")}</p>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-700">{t("about.type_online")}</h6>
                      <p className="mb-0">{t("about.descr_online")}</p>
                      <a href="/signup" className="btn btn-maincolor mt-4">
                        {t("translation:buttons.get_started")}
                      </a>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-700">{t("about.type_stationary")}</h6>
                      <p className="mb-0">{t("about.descr_stationary")}</p>
                      <a href="/signup" className="btn btn-maincolor mt-4">
                        {t("translation:buttons.get_started")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
