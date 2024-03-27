import { Tabs, Tab, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../models/routeModel";
import { useRouteContext } from "../../contexts/RouteContext";
import Button from "../common/Button";

const DesktopNavBar = () => {
  const { currentPath } = useRouteContext();
  const navigate = useNavigate();

  const determineTabValue = () => {
    switch (currentPath) {
      case ROUTES.ROOT.path:
        return currentPath;
      case ROUTES.ABOUT.path:
        return currentPath;
      case ROUTES.EXPERTS.path:
        return currentPath;
      default:
        if (currentPath.includes("/experts/")) {
          return ROUTES.EXPERTS.path;
        } else {
          return null;
        }
    }
  };

  const handleBtnClick = (route) => {
    navigate(route);
  };

  return (
    <Grid
      sx={{ display: { xs: "none", md: "flex" } }}
      container
      justifyContent={"space-between"}
    >
      <Tabs
        value={determineTabValue()}
        sx={{
          ".MuiTabs-indicator": {
            backgroundColor: "white",
          },
          ".MuiTab-root": {
            color: "white",
            "&.Mui-selected": {
              color: "white",
              opacity: 1,
            },
          },
        }}
      >
        <Tab
          label={ROUTES.ROOT.name}
          component={Link}
          to={ROUTES.ROOT.path}
          value={ROUTES.ROOT.path}
        />
        <Tab
          label={ROUTES.ABOUT.name}
          component={Link}
          to={ROUTES.ABOUT.path}
          value={ROUTES.ABOUT.path}
        />
        <Tab
          label={ROUTES.EXPERTS.name}
          component={Link}
          to={ROUTES.EXPERTS.path}
          value={ROUTES.EXPERTS.path}
        />
      </Tabs>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <Button
            variant={"outlined"}
            textColor={"d4c434"}
            buttonColor={"#d4c434"}
            handleClick={() => handleBtnClick(ROUTES.AUTH.path)}
          >
            Sign in
          </Button>
        </Grid>
        <Grid item ml={1}>
          <Button
            variant={"text"}
            textColor={"#d4c434"}
            buttonColor={"#d4c434"}
            handleClick={() => handleBtnClick(ROUTES.AUTH.path)}
          >
            Log in
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default DesktopNavBar;
