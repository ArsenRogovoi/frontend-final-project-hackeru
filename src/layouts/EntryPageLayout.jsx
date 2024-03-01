import Grid from "@mui/material/Grid";

const EntryPageLayout = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} textAlign={"center"}>
        Header
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        Main
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        Footer
      </Grid>
    </Grid>
  );
};

export default EntryPageLayout;
