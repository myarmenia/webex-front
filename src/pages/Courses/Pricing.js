import React from "react";
import { connect } from "react-redux";
import PricingCard from "../../components/pricingCard/PricingCard";

import { packagesWithTheirCourses } from "../../redux/selectors/coursesData";

const Pricing = ({ packagesWithTheirCourses: packages }) => {
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
    "fa fa-thumbs-o-up color-dark"
  ];

  const renderPriceCard = pack => (
    <PricingCard pack={pack} key={pack.id} />
  );

  return (
    <>
      <section className="ls s-pt-55 s-pb-35 s-pt-lg-95 s-pb-lg-75">
        <div className="container">
          <div className="divider-3"></div>
          <div className="row">
            <div className="col-12 text-center price-header">
              <h6 className="special-heading fw-300">Հզորացրեք ինքներդ ձեզ</h6>
              <h2>Ընտրել Փաթեթը</h2>
              <p>
                Ընտրելով այս կամ այն փաթեթը, ձեզ հասանելի կդառնան փաթեթում
                ամփոփված բոլոր դասերը։
              </p>
            </div>

            {packages.map(pack => renderPriceCard(pack))}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  packagesWithTheirCourses: packagesWithTheirCourses(state)
});

export default connect(mapStateToProps, null)(Pricing);
