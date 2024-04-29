import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import useUsersApi from "../../../hooks/useUsersApi";
import dayjs from "dayjs";
import useAppointmentApi from "../../../hooks/useAppointmentApi";
import ProfileExpertSchedule from "../../externalSchedule/ProfileExpertSchedule";

const ExpertProfilePage = () => {
  let { expertId } = useParams();
  const {
    loading: expertDataLoading,
    error: expertDataError,
    expert,
    getExpertData,
  } = useUsersApi();
  const {
    loading: apptsDataLoading,
    error: apptsDataError,
    appointments,
    getFreeApptsByDateRange,
  } = useAppointmentApi();
  const [dataRangeStart, setDataRangeStart] = useState(dayjs());
  const [dataRangeEnd, setDataRangeEnd] = useState(dayjs().add(1, "week"));

  useEffect(() => {
    getExpertData(expertId);
    getFreeApptsByDateRange(expertId, dataRangeStart, dataRangeEnd);
  }, []);

  const handleChangeRangeStart = (data) => {
    setDataRangeStart(data);
  };
  const handleChangeRangeEnd = (data) => {
    setDataRangeEnd(data);
  };

  const handleSearch = () => {
    getFreeApptsByDateRange(expertId, dataRangeStart, dataRangeEnd);
  };

  const refreshAppts = () => {
    getFreeApptsByDateRange(expertId, dataRangeStart, dataRangeEnd);
  };

  if (expertDataLoading) return <Typography>Loading...</Typography>;

  if (expertDataError) return <Typography>{expertDataError}</Typography>;

  if (expert)
    return (
      <Container>
        {/* photo and name */}
        <Grid container mt={1} justifyContent={"space-between"}>
          <Grid
            item
            xs={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {expert.profilePicturePath ? (
              <img
                src={process.env.PUBLIC_URL + "/" + expert.profilePicturePath}
                alt={`${expert.username.firstName}`}
                width={"100%"}
                style={{
                  borderRadius: "5px",
                }}
              />
            ) : (
              <PersonOutlineIcon fontSize="large" />
            )}
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">{`${expert.username.firstName} ${expert.username.lastName}`}</Typography>
          </Grid>
        </Grid>
        {/* About expert */}
        <Grid container mt={1}>
          <Grid item xs={12}>
            <Typography variant="h5">About the expert</Typography>
            <Typography mt={1}>{expert.bio}</Typography>
          </Grid>
        </Grid>
        {/* Schedule */}
        <ProfileExpertSchedule
          appointments={appointments}
          dataRangeStart={dataRangeStart}
          dataRangeEnd={dataRangeEnd}
          handleChangeRangeStart={handleChangeRangeStart}
          handleChangeRangeEnd={handleChangeRangeEnd}
          handleSearch={handleSearch}
          apptsDataLoading={apptsDataLoading}
          apptsDataError={apptsDataError}
          refreshAppts={refreshAppts}
        />
      </Container>
    );
};

export default ExpertProfilePage;
