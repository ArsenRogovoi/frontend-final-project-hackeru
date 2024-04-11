import Form from "./Form";
import ROUTES from "../../models/routeModel";
import FormInput from "./FormInput";
import loginSchema from "../../validation/joi/loginSchema";
import useForm from "../../hooks/useForm";
import initialLoginForm from "../../models/initialLoginForm";
import { memo } from "react";

const LoginForm = () => {
  const handleSubmit = () => {};
  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleSubmit
  );

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
};

export default memo(LoginForm);
