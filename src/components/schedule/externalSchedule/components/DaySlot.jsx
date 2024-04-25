import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import dayjs from "dayjs";

const DaySlot = ({ startTime, endTime }) => {
  return (
    <Grid item xs={5} p={1}>
      <Paper sx={{ m: 1 }}>
        <Box m={1}>
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
