import {
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { useUser } from "../../../contexts/UserContext";
import useAppointmentApi from "../../../hooks/useAppointmentApi";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../models/routeModel";
import dayjs from "dayjs";
import { useState } from "react";

const BookApptModal = ({
  appt,
  modalIsOpen,
  handleModalClose,
  refreshAppts,
}) => {
  const { user } = useUser();
  const { appointment, loading, error, bookAppointment } = useAppointmentApi();
  const [triedToBook, setTriedToBook] = useState(false);
  const navigate = useNavigate();

  const startTime = appt ? appt.startTime : null;
  const endTime = appt ? appt.endTime : null;
  const apptId = appt ? appt._id : null;

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

  const handleLoginBtnClick = () => {
    navigate(ROUTES.LOGIN.path);
  };

  const handleBookAppt = async (apptId) => {
    try {
      bookAppointment(apptId);
    } catch (error) {
    } finally {
      setTriedToBook(true);
    }
  };

  return (
    <Modal
      open={modalIsOpen}
      onClose={() => {
        if (!error && !loading && triedToBook && appointment) {
          refreshAppts();
        }
        setTriedToBook(false);
        handleModalClose();
      }}
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      }}
    >
      <Box sx={modalStyle}>
        {loading && (
          <Grid container>
            <Grid item>
              <Typography>Loading...</Typography>
            </Grid>
          </Grid>
        )}
        {user && !loading && (
          <Grid container direction={"column"}>
            <Grid item>
              <Typography textAlign={"center"} variant="h5">
                Make appointment
              </Typography>
            </Grid>
            <Grid item mt={1}>
              <Paper
                sx={{
                  maxWidth: "300px",
                  m: "0 auto 0 auto",
                }}
              >
                <Box>
                  <Typography fontSize={"20px"} textAlign={"center"}>
                    {dayjs(startTime).format("DD")}{" "}
                    {dayjs(startTime).format("MMMM")}
                  </Typography>
                  {dayjs().year() !== dayjs(startTime).year() && (
                    <Typography fontSize={"20px"} textAlign={"center"}>
                      {dayjs(startTime).format("YYYY")}
                    </Typography>
                  )}
                </Box>
                <Divider variant="middle" />
                <Typography fontSize={"20px"} textAlign={"center"}>
                  {dayjs(startTime).format("HH:mm")} -{" "}
                  {dayjs(endTime).format("HH:mm")}
                </Typography>
              </Paper>
            </Grid>
            {triedToBook && error && (
              <Grid item mt={1}>
                <Paper
                  sx={{
                    maxWidth: "300px",
                    m: "0 auto 0 auto",
                    backgroundColor: "#FF7373",
                  }}
                >
                  <Typography mx={1}>{error}</Typography>
                </Paper>
              </Grid>
            )}
            {triedToBook && !error && (
              <Grid item mt={1}>
                <Paper
                  sx={{
                    maxWidth: "300px",
                    m: "0 auto 0 auto",
                    backgroundColor: "#A9F16C",
                  }}
                >
                  <Typography mx={1}>The appointment booked</Typography>
                </Paper>
              </Grid>
            )}
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {!triedToBook && (
                <Button
                  variant={"contained"}
                  sx={{ m: 1 }}
                  onClick={() => {
                    handleBookAppt(apptId);
                  }}
                >
                  Book
                </Button>
              )}
              <Button
                variant={"outlined"}
                color="warning"
                sx={{ m: 1 }}
                onClick={() => {
                  setTriedToBook(false);
                  handleModalClose();
                }}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        )}
        {!user && !loading && (
          <Grid container direction={"column"}>
            <Grid item>
              <Typography textAlign={"center"} variant="h5">
                Make appointment
              </Typography>
            </Grid>
            <Grid item mt={1}>
              <Typography textAlign={"center"} fontSize={"18px"}>
                You have to be registered user to book appointment
              </Typography>
            </Grid>
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                variant={"contained"}
                sx={{ m: 1 }}
                onClick={handleLoginBtnClick}
              >
                Log in
              </Button>
              <Button
                variant={"outlined"}
                color="warning"
                sx={{ m: 1 }}
                onClick={handleModalClose}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        )}
      </Box>
    </Modal>
  );
};
export default BookApptModal;
