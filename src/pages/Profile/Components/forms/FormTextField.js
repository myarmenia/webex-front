import React from "react";
import TextField from "@material-ui/core/TextField";

const FormTextField = ({
  filedLabel,
  fieldClassName = "",
  fieldType = "text",
  fieldName,
  handleChange = () => {},
  handleBlur = () => {},
  fieldValue = "",
}) => (
  <TextField
    id="outlined-name-input"
    label={filedLabel}
    className={fieldClassName}
    type={fieldType}
    name={fieldName}
    autoComplete={fieldName}
    margin="normal"
    variant="outlined"
    onChange={handleChange}
    onBlur={handleBlur}
    value={fieldValue}
  />
);

export default FormTextField;