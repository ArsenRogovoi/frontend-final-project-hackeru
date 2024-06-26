import { CircularProgress, Grid, Paper, Typography } from "@mui/material";
import Form from "./components/Form";
import useForm from "../../hooks/useForm";
import FormInput from "./components/FormInput";
import initEditUserForm from "../../models/initialEditUserForm";
import editUserSchema from "../../validation/joi/editUserSchema";
import { useState } from "react";
import normalizeUpdateUser from "../../utils/normalizeUpdateUser";

const EditUserForm = ({ user, loading, error, updateUser }) => {
  const [updated, setUpdated] = useState(false);
  const initialEditUserForm = initEditUserForm(user);

  const handleSubmit = async (formData) => {
    const updUser = normalizeUpdateUser(formData);
    setUpdated(false);
    const updatedUser = await updateUser(updUser);
    if (updatedUser) {
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 1500);
    }
  };

  const { value, ...rest } = useForm(
    initialEditUserForm,
    editUserSchema,
    handleSubmit
  );

  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        <Paper>
          <Form
            title="Edit profile"
            onSubmit={rest.onSubmit}
            onReset={rest.handleReset}
            onChange={rest.validateForm}
          >
            <FormInput
              label={"First name:"}
              name={"firstName"}
              type={"text"}
              error={value.errors.firstName}
              onChange={rest.handleChange}
              data={value.data}
            />
            <FormInput
              label={"Last name:"}
              name={"lastName"}
              type={"text"}
              error={value.errors.lastName}
              onChange={rest.handleChange}
              data={value.data}
            />
            <FormInput
              label={"E-mail:"}
              name={"email"}
              type={"email"}
              error={value.errors.email}
              onChange={rest.handleChange}
              data={value.data}
            />
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              mt={2}
            >
              {error && (
                <Grid item>
                  <Paper
                    sx={{
                      maxWidth: "300px",
                      m: "0 auto 0 auto",
                      p: 1,
                      backgroundColor: "#FF7373",
                    }}
                  >
                    <Typography mx={1}>{error}</Typography>
                  </Paper>
                </Grid>
              )}
              {!error && updated && (
                <Grid item>
                  <Paper
                    sx={{
                      maxWidth: "300px",
                      m: "0 auto 0 auto",
                      p: 1,
                      backgroundColor: "#A9F16C",
                    }}
                  >
                    <Typography mx={1}>User has been updated</Typography>
                  </Paper>
                </Grid>
              )}
              {loading && (
                <Grid item>
                  <CircularProgress />
                </Grid>
              )}
            </Grid>
          </Form>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default EditUserForm;
