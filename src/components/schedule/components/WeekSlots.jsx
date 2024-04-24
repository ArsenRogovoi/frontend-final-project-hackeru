import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DaySlots from "./DaySlots";

const WeekSlots = ({
  weekDates,
  handleModalOpen,
  appointments,
  handleDelModalOpen,
}) => {
  return (
    <Grid container>
      {weekDates.map((day) => {
        return (
          <Grid item xs={12} m={1} key={day.unix()}>
            {/* day header */}
            <Paper>
              <Container>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography>{day.format("D MMMM")}</Typography>
                  <IconButton
                    color="primary"
                    onClick={() => handleModalOpen(day)}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Container>
            </Paper>
            {/* day appointments: */}
            <DaySlots
              day={day}
              appointments={appointments}
              handleDelModalOpen={handleDelModalOpen}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default WeekSlots;
