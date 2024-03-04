import Grid from "@mui/material/Grid";
import PageFooter from "../components/pageHeaderComponents/PageFooter";
import PageHeader from "../components/PageHeader";

const EntryPageLayout = () => {
  return (
    <Grid container direction={"column"} sx={{ minHeight: "100vh" }}>
      <Grid item>
        <PageHeader />
      </Grid>
      <Grid
        item
        textAlign={"center"}
        flexGrow={1}
        // bgcolor={"lightgray"}
      >
        <Grid container>
          <Grid item>entry page description</Grid>
          <Grid item>dynamic form</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <PageFooter />
      </Grid>
    </Grid>
  );
};

export default EntryPageLayout;
