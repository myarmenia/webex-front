import React from "react";
import ResponseMessage from "./ResponseMessage";

const ResponseMessageWrap = ({status, message}) => {
  
  return (
    <div className="card-header text-center">
      <ResponseMessage status={status} message={message} />
    </div>
  );
};

export default ResponseMessageWrap;
