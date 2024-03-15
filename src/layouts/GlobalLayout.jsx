import Grid from "@mui/material/Grid";
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/PageHeader";
import { Outlet, useLocation } from "react-router-dom";
import RouteContext from "../contexts/RouteContext";

const GlobalLayout = () => {
  const location = useLocation();

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
