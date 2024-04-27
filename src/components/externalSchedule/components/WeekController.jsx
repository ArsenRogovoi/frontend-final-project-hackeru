import { Box, Grid, Typography, useTheme } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Button from "../../common/Button";

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
        p={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
        sm={4}
        md={3}
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
      <Grid item xs={12} sm={1}>
        <Typography color={"#fff"} textAlign={"center"} fontWeight={600}>
          -
        </Typography>
      </Grid>
      <Grid
        item
        p={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
        sm={4}
        md={3}
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
      <Grid item xs={12} sm={3} md={2} px={1}>
        <Box
          sx={{
            minWidth: { xs: "150px", sm: "0" },
            maxWidth: "246.4px",
            margin: { xs: "0 auto 8px auto", sm: "0" },
          }}
        >
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
