import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import MobileModalForm from "../forms/MobileModalForm";
import useAppointmentApi from "../../../hooks/useAppointmentApi";
import dayjs from "dayjs";
import DaySlots from "../components/DaySlots";

const MobileSchedule = ({ user, date, handleDateChange, weekDates }) => {
  const {
    loading,
    error,
    appointments,
    createAppointment,
    getMonthAppointments,
    deleteAppointment,
  } = useAppointmentApi();

  // creating appointment modal states:
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDay, setModalDay] = useState(null);
  const [modalStartTime, setModalStartTime] = useState(null);
  const [modalEndTime, setModalEndTime] = useState(null);
  // deleting appointment confirmation modal states:
  const [delModalIsOpen, setDelModalIsOpen] = useState(false);
  const [delModalApp, setDelModalApp] = useState(null);

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

  const handleCreateAppointment = () => {
    const appointment = {
      startTime: modalStartTime,
      endTime: modalEndTime,
    };
    handleModalClose();
    createAppointment(appointment);
  };

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
    <Grid container direction={"column"}>
      {/* calendar */}
      <Grid item>
        <DateCalendar value={date} onChange={handleDateChange} disablePast />
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      {/* days of week container and info: */}
      <Grid item>
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
      {/* Modal for creating appointments: */}
      <Modal
        open={modalIsOpen}
        onClose={handleModalClose}
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        }}
      >
        <MobileModalForm
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
      </Modal>
      {/* deleting appointment confirmation modal: */}
      <Modal
        open={delModalIsOpen}
        onClose={handleDelModalClose}
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        }}
      >
        <Box sx={modalStyle}>
          <Typography fontWeight={700}>
            Are you sure you want to cancel this appointment?
          </Typography>
          {delModalApp && (
            <Grid container mt={1}>
              <Grid item xs={12}>
                <Paper
                  style={{
                    backgroundColor: delModalApp.isBooked
                      ? "rgba(235, 250, 46, 0.5)"
                      : "rgba(82, 217, 82, 0.5)",
                  }}
                >
                  <Box p={1}>
                    {delModalApp.isBooked ? (
                      <Typography variant="h6">Reserved slot:</Typography>
                    ) : (
                      <Typography variant="h6">Unreserved slot:</Typography>
                    )}
                    <Typography fontWeight={600}>
                      {dayjs(delModalApp.startTime).format("HH:mm")} -{" "}
                      {dayjs(delModalApp.endTime).format("HH:mm")}{" "}
                      {delModalApp.userName ? `(${delModalApp.userName})` : ""}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item mt={1}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    handleDeleteAppointment(delModalApp._id);
                    handleDelModalClose();
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>
    </Grid>
  );
};
export default MobileSchedule;
