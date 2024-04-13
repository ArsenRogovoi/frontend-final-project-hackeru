import Grid from "@mui/material/Grid";
import PageFooter from "./PageFooter";
import PageHeader from "../header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";
import RouteContext from "../../contexts/RouteContext";
import { useUser } from "../../contexts/UserContext";
import { getToken } from "../../utils/localStorageService";
import { isTokenExpired } from "../../utils/jwtService";

const GlobalLayout = () => {
  const location = useLocation();
  const { getUserData } = useUser();

  const checkAuth = () => {
    const token = getToken();
    const isExpired = isTokenExpired(token);
    if (!isExpired) getUserData();
  };

  checkAuth();
  return (
    <RouteContext.Provider value={{ currentPath: location.pathname }}>
      <Grid container direction={"column"} sx={{ minHeight: "100vh" }}>
        <Grid item>
          <PageHeader />
        </Grid>
        <Grid item flexGrow={1} bgcolor={"#F8F8F8"}>
          <Outlet />
        </Grid>
        <Grid item>
          <PageFooter />
        </Grid>
      </Grid>
    </RouteContext.Provider>
  );
};

export default GlobalLayout;
