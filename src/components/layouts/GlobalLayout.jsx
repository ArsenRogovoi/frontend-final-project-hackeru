import Grid from "@mui/material/Grid";
import PageFooter from "./PageFooter";
import PageHeader from "../header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";
import RouteContext from "../../contexts/RouteContext";
import { useUser } from "../../contexts/UserContext";
import { useEffect, useState } from "react";

const GlobalLayout = () => {
  const location = useLocation();
  const { getUserData } = useUser();
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await getUserData();
      } catch {
      } finally {
        setReadyToRender(true);
      }
    };
    fetchUser();
  }, []);

  return (
    <RouteContext.Provider value={{ currentPath: location.pathname }}>
      <Grid container direction={"column"} sx={{ minHeight: "100vh" }}>
        <Grid item>
          <PageHeader />
        </Grid>
        <Grid item flexGrow={1} bgcolor={"#F8F8F8"}>
          {readyToRender ? <Outlet /> : <>Loading...</>}
        </Grid>
        <Grid item>
          <PageFooter />
        </Grid>
      </Grid>
    </RouteContext.Provider>
  );
};

export default GlobalLayout;
