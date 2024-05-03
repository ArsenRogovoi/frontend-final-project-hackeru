import { Grid, Paper, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={1}
      >
        <Grid item>
          <Typography variant="h4">Page not found</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        my={1}
      >
        <Grid item xs={10}>
          <Paper sx={{ p: 1 }}>
            <Typography>
              This page is not exist. You can use navigation links to get to
              different parts of the application.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default ErrorPage;
