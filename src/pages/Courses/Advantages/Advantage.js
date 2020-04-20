import React from "react";

export const Advantage = ({ icon, title, text }) => (
  <div className="col-lg-4 advantage-item" data-animation="fadeInUp">
    <div className="icon-box text-center">
      <div className="color-main icon-styled fs-77">
        <i className={`fa fa-${icon}`} aria-hidden="true" />
      </div>
      <h6 className="fw-700">
        <a>{title}</a>
      </h6>
      <p>{text}</p>
    </div>
  </div>
);
