import {
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";

const CreateAppointmentModal = ({
  modalIsOpen,
  modalStyle,
  modalDay,
  modalStartTime,
  modalEndTime,
  handleChangeModalStartTime,
  handleChangeModalEndTime,
  handleModalClose,
  handleConfirm,
  loading,
  error,
}) => {
  const [triedToCreate, setTriedToCreate] = useState(false);

  return (
    <Modal
      open={modalIsOpen}
      onClose={() => {
        setTriedToCreate(false);
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
        {modalDay && (
          <Grid container>
            <Grid item>
              <Typography variant="h6">
                Create appointment slot on {modalDay.format("D MMMM YYYY")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2, border: "1px solid #000" }} />
            </Grid>
            <Grid item xs={12}>
              <Typography>Start time:</Typography>
              <TimePicker
                ampm={false}
                value={modalStartTime}
                onChange={handleChangeModalStartTime}
              />
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography>End time:</Typography>
              <TimePicker
                ampm={false}
                minTime={modalStartTime}
                value={modalEndTime}
                onChange={handleChangeModalEndTime}
              />
            </Grid>
            {triedToCreate && !loading && error && (
              <Grid item xs={12} mt={1}>
                <Paper
                  sx={{
                    maxWidth: "300px",
                    backgroundColor: "#FF7373",
                  }}
                >
                  <Typography mx={1}>{error}</Typography>
                </Paper>
              </Grid>
            )}
            {triedToCreate && !loading && !error && (
              <Grid item xs={12} mt={1}>
                <Paper
                  sx={{
                    maxWidth: "300px",
                    backgroundColor: "#A9F16C",
                  }}
                >
                  <Typography mx={1}>The appointment slot created</Typography>
                </Paper>
              </Grid>
            )}
            <Grid item xs={12}>
              <Box mt={2} display={"flex"}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setTriedToCreate(true);
                    handleConfirm();
                  }}
                  disabled={triedToCreate && !loading && !error}
                >
                  Confirm
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ ml: 2 }}
                  onClick={() => {
                    setTriedToCreate(false);
                    handleModalClose();
                  }}
                >
                  Close
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Modal>
  );
};

export default CreateAppointmentModal;
