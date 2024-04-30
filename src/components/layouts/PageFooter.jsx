import * as React from "react";
import { Grid, Typography, Box } from "@mui/material";

const PageFooter = () => {
  return (
    <Grid container bgcolor={"#303030"} color={"white"} pt={1}>
      <Grid item xs={6}>
        <Box
          sx={{ height: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={1}
        >
          <Typography>
            Developed by
            <br />
            Arsen Rogovoi
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
          <img
            alt="logo"
            src="/assets/images/tab-icon.png"
            style={{ maxWidth: "80px" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center">©New Visit</Typography>
      </Grid>
    </Grid>
  );
};

export default PageFooter;
