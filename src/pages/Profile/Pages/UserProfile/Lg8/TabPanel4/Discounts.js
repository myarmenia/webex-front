import React from "react";
import { useTranslation } from "react-i18next";

const Discounts = ({ titleClassName }) => {
  const { t } = useTranslation(["profile"]);
  return (
    <>
      <div className="form-title mt-30">
        <h6 className={titleClassName}>
          {t("tabPanels.make_payment.discount_system")}
        </h6>
      </div>

      <div className="text-center my-30">
        <ul className="flex-direction-nav px-2">
          <li>{t("tabPanels.make_payment.4_month_discount")}</li>
          <li>{t("tabPanels.make_payment.5_month_discount")}</li>
          <li>{t("tabPanels.make_payment.6_month_discount")}</li>
        </ul>
      </div>
    </>
  );
};

export default Discounts;
