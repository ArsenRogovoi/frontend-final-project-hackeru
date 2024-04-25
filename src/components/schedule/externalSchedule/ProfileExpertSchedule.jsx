import { Grid, Typography, Paper, Box } from "@mui/material";
import DaySlot from "./components/DaySlot";
import WeekController from "./components/WeekController";

const ProfileExpertSchedule = ({
  appointments,
  dataRangeStart,
  dataRangeEnd,
  handleChangeRangeStart,
  handleChangeRangeEnd,
  handleSearch,
}) => {
  return (
    <Grid container mt={4}>
      <Grid item xs={12}>
        <Typography variant="h5" width={"100%"}>
          Schedule
        </Typography>
      </Grid>
      {/* schedule controller */}
      <Grid item xs={12}>
        <Paper style={{ backgroundColor: "#1e88e5" }}>
          <WeekController
            dataRangeStart={dataRangeStart}
            handleChangeRangeStart={handleChangeRangeStart}
            dataRangeEnd={dataRangeEnd}
            handleChangeRangeEnd={handleChangeRangeEnd}
            handleSearch={handleSearch}
          />
        </Paper>
      </Grid>
      {/* available dates */}
      <Grid item xs={12}>
        <Grid container justifyContent={"start"}>
          {appointments.map((app, ind) => {
            const { startTime, endTime } = app;
            return (
              <DaySlot startTime={startTime} endTime={endTime} key={ind} />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileExpertSchedule;
