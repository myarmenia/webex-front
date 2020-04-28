import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";

const FormFieldHelper = ({ fieldValidation, helperClassName }) => {
  return (
    fieldValidation && (
      <FormHelperText className={helperClassName}>
        {fieldValidation}
      </FormHelperText>
    )
  );
};

export default FormFieldHelper;
