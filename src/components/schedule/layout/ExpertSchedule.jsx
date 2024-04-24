import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import useAppointmentApi from "../../../hooks/useAppointmentApi";
import dayjs from "dayjs";
import DaySlots from "../components/DaySlots";
import DeleteConfirmationModal from "../forms/DeleteConfirmationModal";
import CreateAppointmentModal from "../forms/CreateAppointmentModal";

const ExpertSchedule = ({ user, date, handleDateChange, weekDates }) => {
  // -->
  const {
    loading,
    error,
    appointments,
    createAppointment,
    getMonthAppointments,
    deleteAppointment,
  } = useAppointmentApi();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // creating appointment modal states:
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDay, setModalDay] = useState(null);
  const [modalStartTime, setModalStartTime] = useState(null);
  const [modalEndTime, setModalEndTime] = useState(null);
  // deleting appointment confirmation modal states:
  const [delModalIsOpen, setDelModalIsOpen] = useState(false);
  const [delModalApp, setDelModalApp] = useState(null);

  // -->
  useEffect(() => {
    getMonthAppointments(user._id, date.month(), date.year());
  }, []);

  const handleModalOpen = (day) => {
    setModalDay(day);
    setModalStartTime(day);
    setModalEndTime(day.add(1, "hour"));
    setModalIsOpen(true);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  const handleChangeModalStartTime = (newValue) => {
    setModalStartTime(newValue);
  };
  const handleChangeModalEndTime = (newValue) => {
    setModalEndTime(newValue);
  };

  // -->
  const handleCreateAppointment = () => {
    const appointment = {
      startTime: modalStartTime,
      endTime: modalEndTime,
    };
    handleModalClose();
    createAppointment(appointment);
  };
  // -->
  const handleDeleteAppointment = (_id) => {
    deleteAppointment(_id);
  };

  const handleDelModalOpen = (appointment) => {
    setDelModalApp(appointment);
    setDelModalIsOpen(true);
  };

  const handleDelModalClose = () => {
    setDelModalIsOpen(false);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 6,
    p: 4,
  };

  return (
    <>
      <Grid
        container
        direction={isDesktop ? "row" : "column"}
        justifyContent={isDesktop ? "space-evenly" : "normal"}
      >
        {/* calendar */}
        <Grid item>
          <DateCalendar value={date} onChange={handleDateChange} disablePast />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        {/* days of week container and info: */}
        <Grid item md={6}>
          <Container>
            {loading && <>loading...</>}
            {!loading && (
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
            )}
          </Container>
        </Grid>
      </Grid>
      {/* Modal for creating appointments: */}
      <CreateAppointmentModal
        modalIsOpen={modalIsOpen}
        modalStyle={modalStyle}
        modalDay={modalDay}
        modalStartTime={modalStartTime}
        modalEndTime={modalEndTime}
        handleChangeModalStartTime={handleChangeModalStartTime}
        handleChangeModalEndTime={handleChangeModalEndTime}
        handleModalClose={handleModalClose}
        handleConfirm={handleCreateAppointment}
      />
      {/* deleting appointment confirmation modal: */}
      <DeleteConfirmationModal
        modalStyle={modalStyle}
        delModalApp={delModalApp}
        delModalIsOpen={delModalIsOpen}
        handleDeleteAppointment={handleDeleteAppointment}
        handleDelModalClose={handleDelModalClose}
      />
    </>
  );
};
export default ExpertSchedule;
