import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import PricingCard from "../../components/pricingCard/PricingCard";
import { PriceHeadline } from "./HeadLine/HeadLine";

import { getFullPackages } from "../../redux/actionCreators/coursesData";
import { packagesWithTheirCourses } from "../../redux/selectors/coursesData";

const Pricing = ({ packagesWithTheirCourses: packages }) => {
  const { t } = useTranslation(["main"]);
  const icons = [
    "icon-m-user color-dark",
    "icon-m-comment color-dark",
    "fa fa-edit color-dark",
    "fa fa-thumbs-o-up color-dark",
    "icon-m-list-alt color-dark",
    "fa fa-address-card-o color-dark",
    "fa fa-envelope-open-o color-dark",
    "fa fa-linode color-dark",
    "fa fa-desktop color-dark",
    "fa fa-thumbs-o-up color-dark",
  ];

  const renderPriceCard = (pack) => <PricingCard pack={pack} key={pack.id} />;

  return (
    <>
      <section
        id="pricesSection"
        className="ls s-pt-55 s-pb-35 s-pt-lg-95 s-pb-lg-75"
      >
        <div className="container">
          <div className="divider-3"></div>
          <div className="row">
            <PriceHeadline
              preTitle={t("pricing.pre_title")}
              mainTitle={t("pricing.main_title")}
              shortText={t("pricing.short_text")}
            />

            {packages.map((pack) => renderPriceCard(pack))}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  packagesWithTheirCourses: packagesWithTheirCourses(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFullPackages: () => dispatch(getFullPackages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
