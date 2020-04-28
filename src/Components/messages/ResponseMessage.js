import React from "react";

// status can be "success" || "danger"
const ResponseMessage = ({status = "", message = ""}) => {
  const statusClassName = status ? `cs-${status}` : "";
  return (
    <p className={`mt-2 cs ${statusClassName} px-10 py-10 rounded`}>
      {message}
    </p>
  );
};

export default ResponseMessage;
