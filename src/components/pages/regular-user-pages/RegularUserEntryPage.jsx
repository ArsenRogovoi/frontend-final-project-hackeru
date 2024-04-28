import Dashboard from "../../dashboard/Dashboard";
import { Container, Typography } from "@mui/material";
import DashboardCard from "../../dashboard/DashboardCard";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../models/routeModel";
import SearchIcon from "@mui/icons-material/Search";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";

const RegularUserEntryPage = () => {
  const navigate = useNavigate();

  const handleSearchForExpertsClick = () => {
    navigate(ROUTES.EXPERTS_SEARCH.path);
  };
  const handleMyAppointmentsClick = () => {
    navigate(ROUTES.MY_APPTS.path);
  };

  return (
    <Container>
      <Typography textAlign={"center"} variant="h4" mt={1}>
        Dashboard
      </Typography>
      <Dashboard>
        <DashboardCard
          MuiIcon={SearchIcon}
          title={"Search for experts"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
          handleClick={handleSearchForExpertsClick}
        />
        <DashboardCard
          MuiIcon={AutoStoriesIcon}
          title={"My appointments"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
          handleClick={handleMyAppointmentsClick}
        />
        <DashboardCard
          MuiIcon={FavoriteIcon}
          title={"Favorite experts"}
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
export default RegularUserEntryPage;
