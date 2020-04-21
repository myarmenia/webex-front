import React from "react";
import { useTranslation } from "react-i18next";

const ContactItem = ({
  iconClassName,
  iconTitle,
  link,
  linkClassName,
  name,
}) => {
  const { t } = useTranslation(["footer"]);

  const renderMediaBody = (link) =>
    link ? (
      <a href={link} className={linkClassName}>
        {name}
      </a>
    ) : (
      t(`${name}`)
    );

  return (
    <div className="media side-icon-box">
      <div className="icon-styled fs-14">
        <i className={iconClassName} title={iconTitle}></i>
      </div>
      <p className="media-body">
        {renderMediaBody(link)}
      </p>
    </div>
  );
};

export default ContactItem;
