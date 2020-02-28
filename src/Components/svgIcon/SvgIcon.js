import React from "react";

import { ReactComponent as Html } from "../../img/devicons/html.svg";
import { ReactComponent as Css } from "../../img/devicons/css.svg";
import { ReactComponent as Boot } from "../../img/devicons/boot.svg";
import { ReactComponent as Htaccess } from "../../img/devicons/htaccess.svg";
import { ReactComponent as Jquery } from "../../img/devicons/jquery.svg";
import { ReactComponent as Js } from "../../img/devicons/js.svg";
import { ReactComponent as Lar } from "../../img/devicons/lar.svg";
import { ReactComponent as Mysql } from "../../img/devicons/mysql.svg";
import { ReactComponent as Node } from "../../img/devicons/node.svg";
import { ReactComponent as Php } from "../../img/devicons/php.svg";
import { ReactComponent as ReactI } from "../../img/devicons/react.svg";
import { ReactComponent as ReduxI } from "../../img/devicons/redux.svg";
import { ReactComponent as Server } from "../../img/devicons/server.svg";

const SvgIcon = ({ name, iconStyles }) => {
  const renderDefaultIcon = iconStyles => {
    const defaultStyles = { ...iconStyles, textAlign: "center" };
    return <i className="fa fa-circle-notch" style={{ ...defaultStyles }} />;
  };

  switch (name) {
    case "html":
      return <Html style={{ ...iconStyles }} />;
    case "css":
      return <Css style={{ ...iconStyles }} />;
    case "boot":
      return <Boot style={{ ...iconStyles }} />;
    case "htaccess":
      return <Htaccess style={{ ...iconStyles }} />;
    case "jquery":
      return <Jquery style={{ ...iconStyles }} />;
    case "js":
      return <Js style={{ ...iconStyles }} />;
    case "lar":
      return <Lar style={{ ...iconStyles }} />;
    case "mysql":
      return <Mysql style={{ ...iconStyles }} />;
    case "node":
      return <Node style={{ ...iconStyles }} />;
    case "php":
      return <Php style={{ ...iconStyles }} />;
    case "react":
      return <ReactI style={{ ...iconStyles }} />;
    case "redux":
      return <ReduxI style={{ ...iconStyles }} />;
    case "server":
      return <Server style={{ ...iconStyles }} />;

    default:
      return renderDefaultIcon(iconStyles);
  }
};

export default SvgIcon;
