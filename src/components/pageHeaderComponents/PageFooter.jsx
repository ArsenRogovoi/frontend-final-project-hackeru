import * as React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const PageFooter = () => {
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      bgcolor={"black"}
      color={"white"}
    >
      <Grid container mt={1}>
        <Grid item xs={6}>
          <Grid container direction={"column"} alignItems={"start"}>
            <Grid item ml={1}>
              <Link href="/about" color={"#a6d3ff"}>
                About
              </Link>
            </Grid>
            <Grid item ml={1}>
              <Link href="#" color={"#a6d3ff"}>
                Contacts
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} textAlign={"center"} border={1}>
          LOGO
        </Grid>
      </Grid>
      <Grid item mt={2}>
        <Typography color={"#a6d3ff"}>©New Visit</Typography>
      </Grid>
    </Grid>
  );
};

export default PageFooter;
