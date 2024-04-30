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

  const handleFavoriteExpertsClick = () => {
    navigate(ROUTES.FAV_EXPERTS.path);
  };

  const handleEditProfileClick = () => {
    navigate(ROUTES.EDIT_USER.path);
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
          text={"Click here to start searching your expert"}
          handleClick={handleSearchForExpertsClick}
        />
        <DashboardCard
          MuiIcon={AutoStoriesIcon}
          title={"My appointments"}
          text={
            "Here you can find appointments you booked. You also can cancel appointment."
          }
          handleClick={handleMyAppointmentsClick}
        />
        <DashboardCard
          MuiIcon={FavoriteIcon}
          title={"Favorite experts"}
          text={"Here are your favorite appointments saved in one place."}
          handleClick={handleFavoriteExpertsClick}
        />
        <DashboardCard
          MuiIcon={EditIcon}
          title={"Edit Profile"}
          text={"If you want change something in your profile, click here."}
          handleClick={handleEditProfileClick}
        />
      </Dashboard>
    </Container>
  );
};
export default RegularUserEntryPage;
