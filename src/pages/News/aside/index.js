import React from "react";
import Search from "./Search";
import Popular from "./Popular";

// import Tags from "./Tags";
// import SocialMedia from "./SocialMedia";

const Aside = ({ signle = false, newslist = [] }) => {
  if(signle) {
    return (
      <aside className="col-lg-5 col-xl-4 order-lg-1">
        <Popular newslist={newslist} />
      </aside>
    );
  }
  return (
    <aside className="col-lg-5 col-xl-4 order-lg-1">      
      <Search />
      {/* <Tags /> */}
      <Popular newslist={newslist} />
      {/* <SocialMedia /> */}
    </aside>
  );
};

export default Aside;