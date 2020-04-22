import React from "react";
import { useTranslation } from "react-i18next";

// https://konpa.github.io/devicon/
// https://simpleicons.org/
// https://svg2jsx.com/ svg to component

import SvgIcon from "../../components/svgIcon/SvgIcon";

const PricingCard = ({ pack }) => {
  const { t } = useTranslation(["main"]);
  const { id, name, currency, pricePerMonth, courses } = pack;
  const featuredClass = id === 2 ? "ds" : "";

  return (
    <div className="col-lg-4 col-12" key={pack.id}>
      <div
        className={`pricing-plan text-center text-lg-left bordered rounded ${featuredClass}`}
      >
        <div className="plan-name text-center">
          <h3>{name}</h3>
        </div>
        <div className="price-wrap">
          <span className="plan-sign fw-900" style={{ fontSize: "15px" }}>
            {currency}
          </span>
          <span
            className="plan-price color-dark fw-900"
            style={{ fontSize: "25px" }}
          >
            {pricePerMonth}
          </span>
          <span className="plan-decimals">/month</span>
        </div>
        <div className="plan-features">
          <ul>
            {courses
              ? courses.map((item, index) => {
                  return (
                    <li key={index}>
                      <SvgIcon
                        name={item.cat}
                        iconStyles={{
                          width: 32,
                          marginRight: "10px"
                        }}
                      />
                      {item.name}
                    </li>
                  );
                })
              : ""}
          </ul>
          <div className="plan-button text-center">            
            <a href="/signin" className="btn btn-maincolor mt-4">
              {t("translation:buttons.get_started_now")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
