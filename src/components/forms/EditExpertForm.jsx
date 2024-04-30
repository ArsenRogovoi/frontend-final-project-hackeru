import { CircularProgress, Grid, Paper, Typography } from "@mui/material";
import Form from "./components/Form";
import useForm from "../../hooks/useForm";
import FormInput from "./components/FormInput";
import { useState } from "react";
import initEditExpertForm from "../../models/initialEditExpertForm";
import editExpertSchema from "../../validation/joi/editExpertSchema";
import normalizeUpdateExpert from "../../utils/normalizeUpdateExpert";

const EditExpertForm = ({ user, loading, error, updateUser }) => {
  const [updated, setUpdated] = useState(false);
  const initialEditExpertForm = initEditExpertForm(user);

  const handleSubmit = async (formData) => {
    setUpdated(false);
    const updExpert = normalizeUpdateExpert(formData);
    const updatedUser = await updateUser(updExpert);
    if (updatedUser) {
      setUpdated(true);
    }
  };

  const { value, ...rest } = useForm(
    initialEditExpertForm,
    editExpertSchema,
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
            <Grid item>
              <Typography fontWeight={600}>Name:</Typography>
            </Grid>
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
            <Grid item>
              <Typography fontWeight={600}>Contacts:</Typography>
            </Grid>
            <FormInput
              label={"E-mail:"}
              name={"email"}
              type={"email"}
              error={value.errors.email}
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
              <Typography fontWeight={600}>
                Where will you visit your customerts?:
              </Typography>
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
            <Grid item>
              <Typography fontWeight={600}>About yourself:</Typography>
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
export default EditExpertForm;
