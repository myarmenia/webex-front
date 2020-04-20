import React from "react";

export const Headline = ({ mainTitle, shortText, h6_classes = "" }) => (
  <div className="col-12 advantages-headline">
    <h3 className="text-center">{mainTitle}</h3>
    <h6 className={`special-heading fw-300 ${h6_classes}`}>{shortText}</h6>
  </div>
);

export const PriceHeadline = ({ preTitle, mainTitle, shortText }) => (
  <div className="col-12 text-center price-header">
    <h6 className="special-heading fw-300">{preTitle}</h6>
    <h2>{mainTitle}</h2>
    <p>{shortText}</p>
  </div>
);
