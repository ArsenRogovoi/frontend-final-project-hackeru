import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import ROUTES from "../../models/routeModel";
import normalizeExpertSignup from "../../utils/normalizeExpertSignup";
import useForm from "../../hooks/useForm";
import initialExpertSignupForm from "../../models/initialExpertSignupForm";
import expertSignupSchema from "../../validation/joi/expertSignupSchema";
import { Grid, Typography } from "@mui/material";
import FormInput from "./components/FormInput";
import Form from "./components/Form";

const ExpertSignupForm = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);
  const { signupUser } = useUser();

  const handleSubmit = async (formData) => {
    setLoading(true);
    const normalized = normalizeExpertSignup(formData);
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
    initialExpertSignupForm,
    expertSignupSchema,
    handleSubmit
  );

  if (!isLoading) {
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
        <Grid item>
          <Typography>Give some info to your future customers:</Typography>
        </Grid>
        <FormInput
          label={"Specialization"}
          name={"specialization"}
          type={"text"}
          error={value.errors.specialization}
          onChange={rest.handleChange}
          data={value.data}
        />
        <FormInput
          label={"About yourself"}
          name={"bio"}
          type={"text"}
          error={value.errors.bio}
          onChange={rest.handleChange}
          data={value.data}
        />
        <FormInput
          label={"Contact number"}
          name={"contactPhone"}
          type={"number"}
          error={value.errors.contactPhone}
          onChange={rest.handleChange}
          data={value.data}
          required={false}
        />
        <Grid item>
          <Typography>Where will you visit your customerts?:</Typography>
        </Grid>
        <FormInput
          label={"Country"}
          name={"country"}
          type={"text"}
          error={value.errors.country}
          onChange={rest.handleChange}
          data={value.data}
        />
        <FormInput
          label={"City"}
          name={"city"}
          type={"text"}
          error={value.errors.city}
          onChange={rest.handleChange}
          data={value.data}
        />
        <FormInput
          label={"Street"}
          name={"street"}
          type={"text"}
          error={value.errors.street}
          onChange={rest.handleChange}
          data={value.data}
        />
        <FormInput
          label={"House number"}
          name={"houseNum"}
          type={"text"}
          error={value.errors.houseNum}
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
  } else {
    return <Typography>Loading...</Typography>;
  }
};
export default ExpertSignupForm;
