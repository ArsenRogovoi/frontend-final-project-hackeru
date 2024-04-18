import { Container, Typography } from "@mui/material";
import DashboardCard from "../../dashboard/DashboardCard";
import Dashboard from "../../dashboard/Dashboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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

  return (
    <Container>
      <Typography textAlign={"center"} variant="h4" mt={1}>
        Dashboard
      </Typography>
      <Dashboard>
        <DashboardCard
          MuiIcon={AccessTimeIcon}
          title={"Appointments"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
        />
        <DashboardCard
          MuiIcon={AutoStoriesIcon}
          title={"Schedule"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
          handleClick={handleScheduleClick}
        />
        <DashboardCard
          MuiIcon={CheckIcon}
          title={"Confirmations"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
        />
        <DashboardCard
          MuiIcon={BlockIcon}
          title={"Black List"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
        />
        <DashboardCard
          MuiIcon={EditIcon}
          title={"Edit Profile"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
        />
      </Dashboard>
    </Container>
  );
};
export default ExpertUserEntryPage;
