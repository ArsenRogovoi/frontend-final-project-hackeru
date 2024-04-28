import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import dayjs from "dayjs";

const MyAppts = ({ appts, setModalAppt, handleModalOpen }) => {
  if (appts.length === 0)
    return (
      <Paper sx={{ p: 1, m: 1, backgroundColor: "#FFE473" }}>
        <Typography>
          It seems you still don't have any appointments booked.
        </Typography>
      </Paper>
    );

  appts.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

  const groupedAppointments = appts.reduce((acc, appt) => {
    const date = appt.startTime.split("T")[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(appt);
    return acc;
  }, {});

  const sortedAppointments = Object.keys(groupedAppointments).map((date) => ({
    date: date,
    appts: groupedAppointments[date],
  }));

  return sortedAppointments.map((apptsObj, ind) => {
    // returns container of day
    return (
      <Grid container key={ind}>
        <Grid item xs={12}>
          <Box mx={1}>
            <Paper
              sx={{
                p: 1,
                m: "0 auto 0 auto",
                backgroundColor: "#62b1d08c",
              }}
            >
              <Typography variant="h6">
                {dayjs(apptsObj.date).format("DD MMMM YYYY")}:
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              mt: 1,
              flexDirection: {
                xs: "column",
                justifyContent: "center",
                sm: "row",
              },
            }}
          >
            {apptsObj.appts.map((appt, ind) => {
              // returns appointments of the day
              return (
                <Grid item key={`+${ind}`}>
                  <Paper
                    sx={{
                      p: { xs: 1 },
                      m: { xs: 1 },
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 3,
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      setModalAppt(appt);
                      handleModalOpen();
                    }}
                  >
                    <Box>
                      <Typography fontSize={"20px"} textAlign={"center"}>
                        {dayjs(appt.startTime).format("DD")}{" "}
                        {dayjs(appt.startTime).format("MMMM")}
                      </Typography>
                    </Box>
                    <Divider variant="middle" />
                    <Typography
                      fontSize={"20px"}
                      fontWeight={600}
                      textAlign={"center"}
                    >
                      {appt.expertName}
                    </Typography>
                    <Typography fontSize={"20px"} textAlign={"center"}>
                      {dayjs(appt.startTime).format("HH:mm")} -{" "}
                      {dayjs(appt.endTime).format("HH:mm")}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  });
};
export default MyAppts;
