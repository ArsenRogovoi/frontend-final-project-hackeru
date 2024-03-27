import * as React from "react";
import { Grid, Link, Typography, Container } from "@mui/material";

const PageFooter = () => {
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      bgcolor={"#303030"}
      color={"white"}
    >
      <Container sx={{ bgcolor: "#303030", color: "white" }}>
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
          <Typography color={"#a6d3ff"} align="center">
            ©New Visit
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
};

export default PageFooter;
