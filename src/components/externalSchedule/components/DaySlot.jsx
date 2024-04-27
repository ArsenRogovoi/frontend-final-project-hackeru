import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import dayjs from "dayjs";

const DaySlot = ({ appt, handleClick }) => {
  const { startTime, endTime } = appt;
  return (
    <Grid item xs={12} sm={4} md={2} sx={{ my: { xs: 1 } }}>
      <Paper
        sx={{
          p: { xs: 1 },
          m: { sm: 1 },
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 3,
            cursor: "pointer",
          },
        }}
        onClick={() => {
          handleClick(appt);
        }}
      >
        <Box>
          <Typography fontSize={"20px"} textAlign={"center"}>
            {dayjs(startTime).format("DD")} {dayjs(startTime).format("MMMM")}
          </Typography>
          {dayjs().year() !== dayjs(startTime).year() && (
            <Typography fontSize={"20px"} textAlign={"center"}>
              {dayjs(startTime).format("YYYY")}
            </Typography>
          )}
        </Box>
        <Divider variant="middle" />
        <Typography fontSize={"20px"} textAlign={"center"}>
          {dayjs(startTime).format("HH:mm")} - {dayjs(endTime).format("HH:mm")}
        </Typography>
      </Paper>
    </Grid>
  );
};
export default DaySlot;
