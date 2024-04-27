import { Grid, Typography, Paper, Box } from "@mui/material";
import DaySlot from "./components/DaySlot";
import WeekController from "./components/WeekController";
import BookApptModal from "./components/BookApptModal";
import { useState } from "react";

const ProfileExpertSchedule = ({
  appointments,
  dataRangeStart,
  dataRangeEnd,
  handleChangeRangeStart,
  handleChangeRangeEnd,
  handleSearch,
  apptsDataLoading,
  apptsDataError,
  refreshAppts,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [apptForModal, setApptForModal] = useState(null);

  const handleModalOpen = (appt) => {
    setApptForModal(appt);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setApptForModal(null);
  };

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
        {apptsDataLoading && <Typography>Loading...</Typography>}

        {apptsDataError && <Typography>{apptsDataError}</Typography>}

        {!apptsDataLoading && !apptsDataError && (
          <Grid container justifyContent={"start"}>
            {appointments.map((appt, ind) => {
              return (
                <DaySlot appt={appt} handleClick={handleModalOpen} key={ind} />
              );
            })}
          </Grid>
        )}
      </Grid>
      <BookApptModal
        appt={apptForModal}
        modalIsOpen={modalIsOpen}
        handleModalClose={handleModalClose}
        refreshAppts={refreshAppts}
      />
    </Grid>
  );
};

export default ProfileExpertSchedule;
