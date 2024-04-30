import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import ROUTES from "../../../models/routeModel";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import EditUserForm from "../../forms/EditUserForm";

const EditUserPage = () => {
  const { user, updateUserDataLoading, updateUserDataError, updateUser } =
    useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(ROUTES.LOGIN.path);
  }, []);

  if (user) {
    return (
      <Grid container direction={"column"}>
        <Grid item>
          <EditUserForm
            user={user}
            loading={updateUserDataLoading}
            error={updateUserDataError}
            updateUser={updateUser}
          />
        </Grid>
      </Grid>
    );
  }
};
export default EditUserPage;
