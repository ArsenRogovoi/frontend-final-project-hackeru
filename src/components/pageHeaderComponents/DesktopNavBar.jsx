import { Box, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../../models/routeModel";
import Typography from "@mui/material/Typography";
import { useRouteContext } from "../../contexts/RouteContext";

const DesktopNavBar = () => {
  const { currentPath } = useRouteContext();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <Tabs
        value={currentPath}
        sx={{
          ".MuiTabs-indicator": {
            backgroundColor: "white",
          },
          ".MuiTab-root": {
            color: "white",
          },
        }}
      >
        <Tab
          label="Home"
          component={Link}
          to={ROUTES.ROOT}
          value={ROUTES.ROOT}
        />
        <Tab
          label="About"
          component={Link}
          to={ROUTES.ABOUT}
          value={ROUTES.ABOUT}
        />
        <Tab
          label="Contact"
          component={Link}
          to={ROUTES.CONTACT}
          value={ROUTES.CONTACT}
        />
      </Tabs>
    </Box>
  );
};
export default DesktopNavBar;
