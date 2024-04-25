import { Box, Grid, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Button from "../../../common/Button";

const WeekController = ({
  dataRangeStart,
  handleChangeRangeStart,
  dataRangeEnd,
  handleChangeRangeEnd,
  handleSearch,
}) => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        item
        xs={5}
        m={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <DatePicker
          value={dataRangeStart}
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
          onChange={(value) => {
            handleChangeRangeStart(value);
          }}
          format="DD/MM/YYYY"
          disablePast
        />
      </Grid>
      <Grid item>
        <Typography color={"#fff"} xs={2} variant="h4">
          -
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        m={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <DatePicker
          value={dataRangeEnd}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 1,
          }}
          onChange={(value) => {
            handleChangeRangeEnd(value);
          }}
          format="DD/MM/YYYY"
          disablePast
        />
      </Grid>
      <Grid item xs={12}>
        <Box mx={2} mb={1}>
          <Button
            variant={"contained"}
            fullWidth
            buttonColor={"#FFA400"}
            handleClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default WeekController;
