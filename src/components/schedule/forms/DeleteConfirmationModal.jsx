import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import dayjs from "dayjs";

const DeleteConfirmationModal = ({
  modalStyle,
  delModalApp,
  delModalIsOpen,
  handleDeleteAppointment,
  handleDelModalClose,
}) => {
  return (
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
          Are you sure you want to remove this appointment?
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
                remove
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => {
                  handleDelModalClose();
                }}
                sx={{ ml: 1 }}
              >
                close
              </Button>
            </Grid>
          </Grid>
        )}
      </Box>
    </Modal>
  );
};
export default DeleteConfirmationModal;
