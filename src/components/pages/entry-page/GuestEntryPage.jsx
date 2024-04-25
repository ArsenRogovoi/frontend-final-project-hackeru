import { Button, Grid, Paper, Typography } from "@mui/material";
import ROUTES from "../../../models/routeModel";
import { useNavigate } from "react-router-dom";

const GuestEntryPage = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"white"}
      sx={{
        height: "100vh",
        backgroundImage: "url(assets/images/entry-page-bg-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item xs={10}>
        <Paper sx={{ backgroundColor: "#d2a019d4" }}>
          <Typography textAlign={"center"} variant="h4" p={1}>
            Solve your problem with NewVisit
          </Typography>
          <Typography variant="h5" p={1} textAlign={"center"}>
            Find an expert that suits your need
          </Typography>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={1}
          >
            <Button
              variant="contained"
              onClick={() => {
                navigate(ROUTES.EXPERTS_SEARCH.path);
              }}
            >
              Search for experts
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default GuestEntryPage;
