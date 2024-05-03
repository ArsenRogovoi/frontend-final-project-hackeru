import { Grid, Paper, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      {/* heading */}
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={1}
      >
        <Grid item>
          <Typography variant="h4">About Page</Typography>
        </Grid>
      </Grid>
      {/* article */}
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
              New Visit is a platform for searching experts and booking
              appointments with them.
            </Typography>
            <br />
            <Typography>
              Before you register to New Visit you can search for experts and
              see their profiles but you still can not book appointments whith
              them.
            </Typography>
            <br />
            <Typography>
              If you want to book appointment with one of the experts or if you
              want to become expert you have to register in the platform. Click
              "Log In" to get to registration page, choose type of registration.
            </Typography>
            <br />
            <Typography fontWeight={600}>USERS:</Typography>
            <Typography>
              When you registered now you can log in to the platform and see
              your dashboard. Dashboard is the page where you can choose
              different services of the application: Searching for experts and
              book appointments with them, seeing your favorite experts,
              managing your appointments and changing your profile.
            </Typography>
            <br />
            <Typography fontWeight={600}>EXPERTS:</Typography>
            <Typography>
              You choosed to be an expert? When you log in to the application
              you get to expert Dashboard where you can find your Schedule for
              creating and managing appointments. Also you can edit your profile
              data.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default AboutPage;
