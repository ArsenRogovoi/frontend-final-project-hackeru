import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import experts from "../../mockData/experts.json";
import { Container, Grid, Typography } from "@mui/material";
import Schedule from "../schedule/Schedule";
import axios from "axios";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const ExpertProfilePage = () => {
  let { expertId } = useParams();
  const [expert, setExpert] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const fetchExpert = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3500/users/experts/${expertId}`
        );
        setExpert(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchExpert();
    // setTimeout(() => {
    //   // change array method!
    //   experts.map((expert) => {
    //     if (expert.id === expertId) {
    //       setExpert(expert);
    //     }
    //   });
    // }, 1000);
  }, []);

  if (isError) return <Typography>{isError.message}</Typography>;

  if (isLoading) return <Typography>Loading...</Typography>;

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
        <Schedule />
      </Container>
    );
};

export default ExpertProfilePage;
