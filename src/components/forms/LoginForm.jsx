import Form from "./components/Form";
import FormInput from "./components/FormInput";
import loginSchema from "../../validation/joi/loginSchema";
import useForm from "../../hooks/useForm";
import initialLoginForm from "../../models/initialLoginForm";
import { memo } from "react";
import { Grid, Typography } from "@mui/material";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../models/routeModel";

const LoginForm = () => {
  const navigate = useNavigate();
  const { loginUser, error, loading } = useUser();

  const handleSubmit = async (formData) => {
    const token = await loginUser(formData);
    if (token) navigate(ROUTES.ROOT.path);
  };

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleSubmit
  );

  if (!loading)
    return (
      <Form
        title="Login page"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
      >
        <FormInput
          label={"email"}
          name={"email"}
          type={"text"}
          error={value.errors.email}
          onChange={rest.handleChange}
          data={value.data}
        />
        <FormInput
          label={"password"}
          name={"password"}
          type={"password"}
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
        {error && (
          <Grid item>
            <Typography color={"red"} fontWeight={600}>
              {error}
            </Typography>
          </Grid>
        )}
      </Form>
    );

  if (loading) return <Typography>Loading...</Typography>;
};

export default memo(LoginForm);
