import { Grid, Typography, IconButton, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Schedule = () => {
  return (
    <Grid container mt={4}>
      <Grid item xs={12}>
        <Typography variant="h5" width={"100%"}>
          Schedule
        </Typography>
      </Grid>
      {/* week controller */}
      <Grid item xs={12}>
        <Grid container mt={1} border={1} borderRadius={2}>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>10-16 March 2024</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={1}>
        <Grid
          container
          justifyContent={"space-between"}
          alignContent={"center"}
        >
          <Grid item textAlign={"center"}>
            <Typography>Mo</Typography>
            <Typography>10</Typography>
            <Divider
              sx={{
                borderColor: "#35df35",
                borderWidth: "3px",
                borderRadius: "5px",
                marginBottom: "8px",
              }}
            />
            <Typography>8:00</Typography>
          </Grid>
          <Grid item textAlign={"center"}>
            <Typography>Tu</Typography>
            <Typography>11</Typography>
            <Divider
              sx={{
                borderColor: "#35df35",
                borderWidth: "3px",
                borderRadius: "5px",
                marginBottom: "8px",
              }}
            />
            <Typography>8:00</Typography>
          </Grid>
          <Grid item textAlign={"center"}>
            <Typography>We</Typography>
            <Typography>12</Typography>
            <Divider
              sx={{
                borderColor: "#de5575",
                borderWidth: "3px",
                borderRadius: "5px",
                marginBottom: "8px",
              }}
            />
          </Grid>
          <Grid item textAlign={"center"}>
            <Typography>Th</Typography>
            <Typography>13</Typography>
            <Divider
              sx={{
                borderColor: "#35df35",
                borderWidth: "3px",
                borderRadius: "5px",
                marginBottom: "8px",
              }}
            />
            <Typography
              sx={{
                textDecorationLine: "underline",
                fontWeight: "700",
              }}
            >
              8:00
            </Typography>
          </Grid>
          <Grid item textAlign={"center"}>
            <Typography>Fr</Typography>
            <Typography>14</Typography>
            <Divider
              sx={{
                borderColor: "#35df35",
                borderWidth: "3px",
                borderRadius: "5px",
                marginBottom: "8px",
              }}
            />
            <Typography>8:00</Typography>
          </Grid>
          <Grid item textAlign={"center"}>
            <Typography>Sa</Typography>
            <Typography>15</Typography>
            <Divider
              sx={{
                borderColor: "#35df35",
                borderWidth: "3px",
                borderRadius: "5px",
                marginBottom: "8px",
              }}
            />
            <Typography>8:00</Typography>
          </Grid>
          <Grid item textAlign={"center"}>
            <Typography>Su</Typography>
            <Typography>16</Typography>
            <Divider
              sx={{
                borderColor: "#35df35",
                borderWidth: "3px",
                borderRadius: "5px",
                marginBottom: "8px",
              }}
            />
            <Typography>8:00</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Schedule;
