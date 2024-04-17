import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import useForm from "../../hooks/useForm";
import Form from "./components/Form";
import FormInput from "./components/FormInput";
import { Grid, Typography } from "@mui/material";
import initialRegularSignupForm from "../../models/initialRegularSignupForm";
import regularSignupSchema from "../../validation/joi/regularSignupSchema";
import normalizeRegularSignup from "../../utils/normalizeRegularSignup";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../models/routeModel";

const SignupForm = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);
  const { signupUser } = useUser();

  const handleSubmit = async (formData) => {
    setLoading(true);
    const normalized = normalizeRegularSignup(formData);
    const err = await signupUser(normalized);
    setLoading(false);
    if (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError(err.message);
      }
    } else {
      navigate(ROUTES.ROOT.path);
    }
  };

  const { value, ...rest } = useForm(
    initialRegularSignupForm,
    regularSignupSchema,
    handleSubmit
  );

  if (!isLoading)
    return (
      <Form
        title="Signup page"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
      >
        <FormInput
          label={"First name"}
          name={"firstName"}
          type={"text"}
          error={value.errors.firstName}
          onChange={rest.handleChange}
          data={value.data}
        />
        <FormInput
          label={"Last name"}
          name={"lastName"}
          type={"text"}
          error={value.errors.lastName}
          onChange={rest.handleChange}
          data={value.data}
        />
        <FormInput
          label={"Email"}
          name={"email"}
          type={"email"}
          error={value.errors.email}
          onChange={rest.handleChange}
          data={value.data}
        />
        <FormInput
          label={"Password"}
          name={"password"}
          type={"password"}
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
        {isError && (
          <Grid item>
            <Typography>{isError}</Typography>
          </Grid>
        )}
      </Form>
    );

  if (isLoading) return <Typography>Loading...</Typography>;
};

export default SignupForm;
