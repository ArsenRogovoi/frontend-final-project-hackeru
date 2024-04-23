import { Box, Button, Grid, Paper, Typography } from "@mui/material";
const dayjs = require("dayjs");

const DaySlots = ({ day, appointments, handleDelModalOpen }) => {
  const slotApps = appointments.filter((app) => {
    return dayjs(app.startTime).isSame(day, "day");
  });
  return (
    <Grid container>
      {slotApps.map((app, ind) => {
        const startTime = dayjs(app.startTime);
        const endTime = dayjs(app.endTime);
        const isBooked = app.isBooked;
        const userName = isBooked ? app.userName : null;
        const paperBg = isBooked
          ? "rgba(235, 250, 46, 0.5)"
          : "rgba(82, 217, 82, 0.5)";

        return (
          <Grid item key={ind} xs={12} mt={1}>
            <Paper style={{ backgroundColor: paperBg }}>
              <Box p={1}>
                {isBooked ? (
                  <Typography variant="h6">Reserved slot:</Typography>
                ) : (
                  <Typography variant="h6">Unreserved slot:</Typography>
                )}
                <Typography fontWeight={600}>
                  {startTime.format("HH:mm")} - {endTime.format("HH:mm")}{" "}
                  {userName ? `(${userName})` : ""}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  sx={{ mt: 1 }}
                  onClick={() => {
                    handleDelModalOpen(app);
                  }}
                >
                  Cancel slot
                </Button>
              </Box>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DaySlots;
