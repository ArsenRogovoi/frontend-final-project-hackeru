import Form from "./components/Form";
import FormInput from "./components/FormInput";
import loginSchema from "../../validation/joi/loginSchema";
import useForm from "../../hooks/useForm";
import initialLoginForm from "../../models/initialLoginForm";
import { memo, useState } from "react";
import { Typography } from "@mui/material";
import { useUser } from "../../contexts/UserContext";

const LoginForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);
  const { loginUser } = useUser();

  const handleSubmit = async (formData) => {
    setLoading(true);
    const err = await loginUser(formData);
    setLoading(false);
    if (err) {
      setError(err);
    }
  };

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleSubmit
  );

  if (!isError && !isLoading)
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
      </Form>
    );

  if (isError) return <Typography>{isError.message}</Typography>;

  if (isLoading) return <Typography>Loading...</Typography>;
};

export default memo(LoginForm);
