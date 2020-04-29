import React from "react";

function Section1({ t }) {
  return (
    <section className="ls  s-pb-60 c-gutter-50 about-section text-center text-lg-left container-px-lg-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="special-heading fw-300 text-center mb-0">
              {t("about.mothods.title")}
            </h3>
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="item-content">
                  <div className="d-none d-lg-block divider-35"></div>
                  <h6 className="fw-600 text-center">
                    {t("about.mothods.procedures.title")}
                  </h6>
                  <ul>
                    <li className=" mb-10">
                      {t("about.mothods.procedures.0")}
                    </li>
                    <li className=" mb-10">
                      {t("about.mothods.procedures.1")}
                    </li>
                    <li className=" mb-10">
                      {t("about.mothods.procedures.2")}
                    </li>
                    <li className=" mb-10">
                      {t("about.mothods.procedures.3")}
                    </li>
                    <li className=" mb-10 color-dark">
                      {t("about.mothods.procedures.4")}
                    </li>
                    <li className=" mb-10">
                      {t("about.mothods.procedures.5")}
                    </li>
                    <li className=" mb-10">
                      {t("about.mothods.procedures.6")}
                    </li>
                  </ul>
                </div>
                <div className="divider-30 d-block d-lg-none"></div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="item-content">
                  <div className="d-none d-lg-block divider-35"></div>
                  <h6 className="fw-600 text-center">
                    {t("about.mothods.faq.title")}
                  </h6>
                  <div className="col-md-12 mb-20">
                    <cite className=""> {t("about.mothods.faq.q_0")}</cite>
                    <br />
                    <p className="color-dark"> {t("about.mothods.faq.a_0")}</p>

                    <cite className=""> {t("about.mothods.faq.q_1")}</cite>
                    <br />
                    <p className="color-dark"> {t("about.mothods.faq.a_1")}</p>

                    <cite className=""> {t("about.mothods.faq.q_2")}</cite>
                    <br />
                    <p className="color-dark"> {t("about.mothods.faq.a_2")}</p>

                    <cite className=""> {t("about.mothods.faq.q_3")}</cite>
                    <br />
                    <p className="color-dark"> {t("about.mothods.faq.a_3")}</p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-10 col-lg-8">
                  <div className="item-content">
                    <div className="d-none d-lg-block divider-35"></div>
                    <p className="color-dark fw-500 text-justify">
                      {t("about.mothods.dev.intro")}
                      <a className="link-about" href="http://www.web-ex.tech">
                        {" "}
                        www.web-ex.tech
                      </a>
                    </p>

                    <p className="color-dark text-left icon-inline">
                      {t("about.mothods.dev.other")}

                      <a
                        className="link-about fs-24 pl-1"
                        href={t("about.mothods.dev.other_video")}
                      >
                        <i className="fa fa-video "></i>
                      </a>
                    </p>
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
