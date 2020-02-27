import React from "react";

const PricingCard = ({ pack, icons }) => {
  const { id, fullName, currency, pricePerMonth, courses, buttonText } = pack;
  const featuredClass = id === 2 ? "ds" : "";

  return (
    <div className="col-lg-4 col-12" key={pack.id}>
      <div
        className={`pricing-plan text-center text-lg-left bordered rounded ${featuredClass}`}
      >
        <div className="plan-name text-center">
          <h3>{fullName}</h3>
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
                      <i className={icons[index]}></i>
                      {item.name}
                    </li>
                  );
                })
              : ""}
          </ul>
          <div className="plan-button text-center">
            <a href="#" className="btn btn-maincolor">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
