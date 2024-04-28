import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

const ApptCancelationModal = ({
  modalIsOpen,
  modalAppt,
  handleModalClose,
  handleCancelAppt,
  loading,
  appointment,
  error,
}) => {
  const [triedToCancel, setTriedToCancel] = useState();

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
    <Modal
      open={modalIsOpen}
      onClose={() => {
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
        {!modalAppt && <CircularProgress />}
        {modalAppt && (
          <Grid container direction={"column"} alignItems={"center"}>
            <Grid item>
              <Typography>
                Are you sure you want to cancel appointment with{" "}
                {modalAppt.expertName} at{" "}
                {dayjs(modalAppt.startTime).format("HH:mm")}-
                {dayjs(modalAppt.endTime).format("HH:mm")} on{" "}
                {dayjs(modalAppt.startTime).format("DD MMMM")}?
              </Typography>
            </Grid>
            {!loading && !appointment && error && (
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
            {triedToCancel && appointment && !error && (
              <Grid item mt={1}>
                <Paper
                  sx={{
                    maxWidth: "300px",
                    m: "0 auto 0 auto",
                    backgroundColor: "#A9F16C",
                  }}
                >
                  <Typography mx={1}>The appointment canceled</Typography>
                </Paper>
              </Grid>
            )}
            <Grid item>
              <Grid container>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{
                      mt: { xs: 1 },
                    }}
                    onClick={() => {
                      setTriedToCancel(true);
                      handleCancelAppt(modalAppt);
                    }}
                    disabled={triedToCancel}
                  >
                    Cancel appointment
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: { xs: 1 },
                    }}
                    onClick={() => {
                      setTriedToCancel(false);
                      handleModalClose();
                    }}
                  >
                    Close
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Box>
    </Modal>
  );
};
export default ApptCancelationModal;
