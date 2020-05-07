import React from "react";

const SocialMedia = () => {
  return (
    <>
      <div className="widget widget_twitter">
        <h3 className="widget-title">
          <i className="fa fa-slideshare pr-2"></i>
          Twitter
        </h3>
        <div className="media align-items-baseline">
          <div className="icon-styled color-main3 fs-16">
            <a href="http://localhost:3000">
              <i className="fa fa-twitter color-icon"></i>
            </a>
          </div>
          <div className="media-body">
            <p>Connect to your employees #purpose to unlock their potential:</p>
            <a>http://on.bcg.com/2enKlr7</a>
            <p className="time color-dark fw-500">1 week ago</p>
          </div>
        </div>
      </div>

      <div className="widget widget_twitter">
        <h3 className="widget-title">
          <i className="fa fa-slideshare pr-2"></i>
          Facebook
        </h3>
        <div className="media align-items-baseline">
          <div className="icon-styled color-main3 fs-16">
            <a href="#" className="fa fa-facebook color-icon"></a>
          </div>
          <div className="media-body">
            <p>Connect to your employees #purpose to unlock their potential:</p>
            <a>http://on.bcg.com/2enKlr7</a>
            <p className="time color-dark fw-500">1 week ago</p>
          </div>
        </div>
      </div>

      <div className="widget widget_twitter">
        <h3 className="widget-title">
          <i className="fa fa-slideshare pr-2"></i>
          Instagram
        </h3>
        <div className="media align-items-baseline">
          <div className="icon-styled color-main3 fs-16">
            <a href="http://localhost:3000">
              <i className="fa fa-instagram color-icon"></i>
            </a>
          </div>
          <div className="media-body">
            <p>Connect to your employees #purpose to unlock their potential:</p>
            <a href="http://localhost:3000">http://on.bcg.com/2enKlr7</a>
            <p className="time color-dark fw-500">1 week ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
