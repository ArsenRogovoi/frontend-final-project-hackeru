import {
  Container,
  Divider,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import DeleteConfirmationModal from "../forms/DeleteConfirmationModal";
import CreateAppointmentModal from "../forms/CreateAppointmentModal";
import WeekSlots from "../components/WeekSlots";
import ScheduleCalendar from "../components/SchedulCalendar";

const ExpertSchedule = ({
  user,
  date,
  handleDateChange,
  weekDates,
  handleCreateAppointment,
  appointments,
  error,
  loading,
  handleDeleteAppointment,
  getMonthAppointments,
}) => {
  // responsiveness:
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

  const handleModalOpen = (day) => {
    const currentTime = dayjs();
    const startTime = day
      .hour(currentTime.hour())
      .minute(currentTime.minute())
      .second(0)
      .millisecond(0);
    setModalDay(day);
    setModalStartTime(startTime);
    setModalEndTime(startTime.add(1, "hour"));
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
  const handleDelModalOpen = (appointment) => {
    setDelModalApp(appointment);
    setDelModalIsOpen(true);
  };
  const handleDelModalClose = () => {
    setDelModalIsOpen(false);
  };

  const handleModalCreateBtnClick = () => {
    handleCreateAppointment(modalStartTime, modalEndTime);
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
          <ScheduleCalendar
            date={date}
            getMonthAppointments={getMonthAppointments}
            handleDateChange={handleDateChange}
            loading={loading}
            appointments={appointments}
          />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        {/* days of week container and info: */}
        <Grid item md={6}>
          <Container>
            {loading && <>loading...</>}
            {!loading && (
              <WeekSlots
                weekDates={weekDates}
                handleModalOpen={handleModalOpen}
                appointments={appointments}
                handleDelModalOpen={handleDelModalOpen}
              />
            )}
          </Container>
        </Grid>
      </Grid>
      <CreateAppointmentModal
        loading={loading}
        error={error}
        modalIsOpen={modalIsOpen}
        modalStyle={modalStyle}
        modalDay={modalDay}
        modalStartTime={modalStartTime}
        modalEndTime={modalEndTime}
        handleChangeModalStartTime={handleChangeModalStartTime}
        handleChangeModalEndTime={handleChangeModalEndTime}
        handleModalClose={handleModalClose}
        handleConfirm={handleModalCreateBtnClick}
      />
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
