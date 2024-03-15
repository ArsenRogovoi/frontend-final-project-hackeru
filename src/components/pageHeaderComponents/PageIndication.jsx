import Typography from "@mui/material/Typography";
import { useRouteContext } from "../../contexts/RouteContext";
import ROUTES from "../../models/routeModel";

const PageIndication = () => {
  const { currentPath } = useRouteContext();
  let currentRoute;

  Object.values(ROUTES).forEach((route) => {
    if (route.path === currentPath) {
      currentRoute = route.name;
    }
  });

  return (
    <Typography
      variant="h6"
      component="div"
      // sx={{ flexGrow: 1 }}
      sx={{ display: { md: "none" } }}
    >
      {currentRoute}
    </Typography>
  );
};

export default PageIndication;
