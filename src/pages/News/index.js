import React from "react";

import MainNews from "./MainNews";
import Aside from "./aside";

import newsMock from "./lastNews/newsMock";

function News() {
  return (
    <section className="ls s-pt-60 s-pb-45 s-py-lg-100">
      <div className="container">
        <div className="row c-gutter-50">
          <MainNews newslist={newsMock} />
          <Aside newslist={newsMock} />
        </div>
      </div>
    </section>
  );
}

export default News;
