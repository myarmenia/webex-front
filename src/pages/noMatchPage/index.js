import React from "react";

const NoMatchPage = ({ notFound = "" }) => (
  <h3 className="text-center">404 - {notFound} </h3>
);

export default NoMatchPage;
