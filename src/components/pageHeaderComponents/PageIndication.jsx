import Typography from "@mui/material/Typography";
import { useRouteContext } from "../../contexts/RouteContext";
import ROUTES from "../../models/routeModel";

const PageIndication = () => {
  const { currentPath } = useRouteContext();
  let currentRoute;

  for (let route in ROUTES) {
    if (ROUTES[route] === currentPath) {
      currentRoute = route;
    }
  }

  return (
    <Typography
      variant="h6"
      component="div"
      // sx={{ flexGrow: 1 }}
      sx={{ display: { md: "none" } }}
    >
      {currentRoute === "ROOT" ? "HOME" : currentRoute}
    </Typography>
  );
};

export default PageIndication;
