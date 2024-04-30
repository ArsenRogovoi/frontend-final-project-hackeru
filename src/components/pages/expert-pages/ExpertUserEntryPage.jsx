import { Container, Grid, Typography } from "@mui/material";
import DashboardCard from "../../dashboard/DashboardCard";
import Dashboard from "../../dashboard/Dashboard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CheckIcon from "@mui/icons-material/Check";
import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../models/routeModel";

const ExpertUserEntryPage = () => {
  const navigate = useNavigate();

  const handleScheduleClick = () => {
    navigate(ROUTES.EXPERT_SCHEDULE.path);
  };
  const handleEditProfileClick = () => {
    navigate(ROUTES.EDIT_EXPERT.path);
  };

  return (
    <Container>
      <Typography textAlign={"center"} variant="h4" mt={1}>
        Dashboard
      </Typography>
      <Dashboard>
        <DashboardCard
          MuiIcon={AutoStoriesIcon}
          title={"Schedule"}
          text={
            "Click here to create your appointment slots and see how many appointments booked alredy."
          }
          handleClick={handleScheduleClick}
        />
        <DashboardCard
          MuiIcon={EditIcon}
          title={"Edit Profile"}
          text={"Here you can edit your profile."}
          handleClick={handleEditProfileClick}
        />
        <Grid item xs={12}>
          <Typography textAlign={"left"} variant="h6" sx={{ ml: 2 }}>
            In developing:
          </Typography>
        </Grid>
        <DashboardCard
          MuiIcon={CheckIcon}
          title={"Confirmations"}
          text={
            "In future we want to add confirmation functionality. Here you will be able to choose if to let book appointment for user."
          }
        />
        <DashboardCard
          MuiIcon={BlockIcon}
          title={"Black List"}
          text={
            "Soon you can choose unwanted users for booking your appointment slots"
          }
        />
      </Dashboard>
    </Container>
  );
};
export default ExpertUserEntryPage;
