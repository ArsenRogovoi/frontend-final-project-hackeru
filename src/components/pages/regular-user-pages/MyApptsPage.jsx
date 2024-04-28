import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import useAppointmentApi from "../../../hooks/useAppointmentApi";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../models/routeModel";
import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import MyAppts from "./components/MyAppts";
import ApptCancelationModal from "./components/ApptCancelationModal";

const MyApptsPage = () => {
  const { user } = useUser();
  const {
    loading,
    error,
    appointments,
    appointment,
    userCancelAppt,
    getMyBookedAppts,
  } = useAppointmentApi();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalAppt, setModalAppt] = useState(null);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  const handleModalClose = () => {
    setModalAppt(null);
    setModalIsOpen(false);
  };

  const handleCancelAppt = async (modalAppt) => {
    await userCancelAppt(modalAppt._id);
  };

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.LOGIN.path);
    }
  }, []);

  useEffect(() => {
    try {
      getMyBookedAppts();
    } catch (error) {
    } finally {
      //   console.log(appointments);
    }
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="h4" mt={1}>
              My Appointments
            </Typography>
          </Box>
        </Grid>
        {loading && (
          <Grid item xs={12} mt={4}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CircularProgress />
            </Box>
          </Grid>
        )}
        {!loading && !appointments && error && (
          <Grid item xs={12} mt={4}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Paper
                sx={{
                  maxWidth: "300px",
                  m: "0 auto 0 auto",
                  p: 1,
                  backgroundColor: "#FF7373",
                }}
              >
                <Typography mx={1}>{error}</Typography>
              </Paper>
            </Box>
          </Grid>
        )}
        {!loading && !error && (
          <Grid item xs={12} mt={1}>
            <MyAppts
              appts={appointments}
              setModalAppt={setModalAppt}
              handleModalOpen={handleModalOpen}
            />
          </Grid>
        )}
      </Grid>
      <ApptCancelationModal
        loading={loading}
        error={error}
        appointment={appointment}
        modalIsOpen={modalIsOpen}
        modalAppt={modalAppt}
        handleModalClose={handleModalClose}
        handleCancelAppt={handleCancelAppt}
      />
    </>
  );
};
export default MyApptsPage;
