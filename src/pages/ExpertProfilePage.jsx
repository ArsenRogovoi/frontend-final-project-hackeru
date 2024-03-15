import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import experts from "../mockData/experts.json";
import { Container, Grid, Typography } from "@mui/material";
import Schedule from "./scheduleComponents/Schedule";

const ExpertProfilePage = () => {
  let { expertId } = useParams();
  const [expert, setExpert] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // change array method!
      experts.map((expert) => {
        if (expert.id === expertId) {
          setExpert(expert);
        }
      });
    }, 1000);
  }, []);

  return expert ? (
    <Container>
      {/* photo and name */}
      <Grid container mt={1} justifyContent={"space-between"}>
        <Grid item xs={3}>
          <img
            src={expert.photoUrl}
            alt={`${expert.name}`}
            width={"100%"}
            style={{
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6">{expert.name}</Typography>
        </Grid>
      </Grid>
      {/* About expert */}
      <Grid container mt={1}>
        <Grid item xs={12}>
          <Typography variant="h5">About the expert</Typography>
          <Typography mt={1}>{expert.description}</Typography>
        </Grid>
      </Grid>
      {/* Schedule */}
      <Schedule />
    </Container>
  ) : (
    <>loading or missing data</>
  );
};

export default ExpertProfilePage;