import { Box, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../../models/routeModel";
import Typography from "@mui/material/Typography";
import { useRouteContext } from "../../contexts/RouteContext";

const DesktopNavBar = () => {
  const { currentPath } = useRouteContext();

  const determineTabValue = () => {
    if (currentPath.includes("/experts/")) {
      return ROUTES.EXPERTS.path;
    } else {
      return currentPath;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
    </Box>
  );
};
export default DesktopNavBar;
