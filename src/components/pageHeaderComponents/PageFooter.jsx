import * as React from "react";
import Grid from "@mui/material/Grid";

const PageFooter = () => {
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      bgcolor={"black"}
      color={"white"}
    >
      <Grid item mt={1}>
        LOGO
      </Grid>
      <Grid item mt={2}>
        <Grid container direction={"column"} alignItems={"center"}>
          <Grid item>About</Grid>
          <Grid item>Contacts</Grid>
        </Grid>
      </Grid>
      <Grid item mt={2}>
        ©New Visit
      </Grid>
    </Grid>
  );
};

export default PageFooter;
