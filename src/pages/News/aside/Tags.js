import React from "react";

function Tags() {
  return (
    <div className="widget widget_tag_cloud">
      <h3 className="widget-title">
        <i className="fa fa-tags pr-2"></i>
        Tags
      </h3>
      <div className="tagcloud">
        <a href="#" className="tag-cloud-link">
          Technology
        </a>

        <a href="#" className="tag-cloud-link">
          Humanities
        </a>

        <a href="#" className="tag-cloud-link">
          Language
        </a>

        <a href="#" className="tag-cloud-link">
          Science
        </a>

        <a href="#" className="tag-cloud-link">
          Business
        </a>

        <a href="#" className="tag-cloud-link">
          Marketing
        </a>

        <a href="#" className="tag-cloud-link">
          Lifestyle
        </a>

        <a href="#" className="tag-cloud-link">
          Math
        </a>
      </div>
    </div>
  );
}

export default Tags;
