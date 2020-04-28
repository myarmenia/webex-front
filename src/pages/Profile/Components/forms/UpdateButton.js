import React from "react";
import Button from "@material-ui/core/Button";

const UpdateButton = ({
  wrapperClassName,
  handleClick = () => {},
  buttonText = "update form",
}) => (
  <div className={wrapperClassName}>
    <Button
      variant="contained"
      size="large"
      id="buttonColor"
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  </div>
);

export default UpdateButton;
