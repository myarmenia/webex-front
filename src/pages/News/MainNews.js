import React from "react";

import MainNewsList from "./MainNewsList";
// import mainJson from "./mainJson.json";

const MainNews = ({ newslist = [] }) => {
  return (
    <main className="col-lg-7 col-xl-8 order-lg-2">
      <MainNewsList newslist={newslist} />

      {/* <nav className="navigation pagination @@navClassName" role="navigation">
        <button type="button" className="btn btn-maincolor full-width">
          load more<i className="fa fa-spinner fa-pulse"></i>
        </button>
      </nav> */}
    </main>
  );
};

export default MainNews;
