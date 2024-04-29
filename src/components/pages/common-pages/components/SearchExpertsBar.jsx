import { Button, Grid, TextField } from "@mui/material";

const SearchExpertsBar = ({ inputVal, setInputVal, handleSearch }) => {
  return (
    <Grid container alignItems={"stretch"}>
      <Grid item xs={12} sm={8}>
        <TextField
          value={inputVal}
          label={"Search"}
          fullWidth
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{ mt: { xs: 1 }, m: { sm: 0 }, p: { sm: 0 } }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{ m: { sm: 0 }, height: "56px" }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};
export default SearchExpertsBar;
