import React from "react";

const WideImage = ({image, slug}) => {
  return (
    <section className="ls s-pt-60 s-pb-30 s-pt-lg-100 s-pb-lg-50 c-gutter-0">
      <div className="container">
        <div className="col-12">
          <div className="item-media rounded post-thumbnail">
            {/* <img src={require(`../../../img/news/newMain.jpg`)} alt="" /> */}
            <img src={image} alt={slug} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WideImage;
