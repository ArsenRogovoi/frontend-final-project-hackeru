import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { forwardRef, useState } from "react";

const MobileModalForm = forwardRef(
  (
    {
      modalIsOpen,
      modalStyle,
      modalDay,
      modalStartTime,
      modalEndTime,
      handleChangeModalStartTime,
      handleChangeModalEndTime,
      handleModalClose,
      handleConfirm,
    },
    ref
  ) => {
    return (
      <Box sx={modalStyle} ref={ref}>
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
                inputRef={(inputRef) => {
                  if (inputRef && modalIsOpen) {
                    inputRef.focus();
                  }
                }}
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
            <Grid item xs={12}>
              <Box mt={2} display={"flex"}>
                <Button variant="contained" onClick={handleConfirm}>
                  Confirm
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ ml: 2 }}
                  onClick={handleModalClose}
                >
                  Close
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    );
  }
);

export default MobileModalForm;
