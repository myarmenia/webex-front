import React from "react";

const OneForth = ({ widgetComponent, widgetClassName }) => {
  const oneForthClasses = `col-12 col-md-6 col-lg-3 animate animated fadeInUp`;
  return (
    <div className={oneForthClasses} data-animation="fadeInUp">
      <div className={`widget ${widgetClassName}`}>{widgetComponent}</div>
    </div>
  );
};

export default OneForth;
