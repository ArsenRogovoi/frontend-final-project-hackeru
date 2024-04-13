import { Grid, TextField } from "@mui/material";
import { makeFirstLetterCapital } from "../../../utils/algoMethods";
import { memo } from "react";

const FormInput = ({
  required,
  type,
  variant,
  name,
  data,
  label,
  error,
  handleChange,
  ...rest
}) => {
  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={handleChange}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
};

FormInput.defaultProps = {
  required: true,
  type: "text",
  variant: "outlined",
};

export default memo(FormInput);
