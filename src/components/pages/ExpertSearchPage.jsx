import {
  Grid,
  Typography,
  Container,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import mockExperts from "../../mockData/experts.json";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import ROUTES from "../../models/routeModel";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios from "axios";

const ExpertSearchPage = () => {
  const [experts, setExperts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3500/users/experts");
        setExperts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchExperts();

    // setTimeout(() => {
    //   setExperts(mockExperts);
    //   console.log(experts);
    // }, 1000);
  }, []);

  if (isError) return <Typography>{isError.message}</Typography>;

  if (isLoading) return <Typography>Loading...</Typography>;

  if (experts)
    return (
      <Container>
        <Typography variant="h4" mt={1}>
          Experts for booking visits
        </Typography>
        {/* maybe it will be better with css grid */}
        <Grid container direction={"column"} mt={1}>
          {experts.map((expert) => {
            return (
              <Grid item key={expert._id} my={1}>
                <Paper
                  elevation={1}
                  sx={{
                    transition: "box-shadow 0.3s",
                    boxShadow: 1,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                >
                  <Grid container direction={"column"}>
                    <Grid item>
                      <Grid
                        container
                        direction={"row"}
                        alignContent={"space-between"}
                      >
                        <Grid
                          item
                          xs={3}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          {expert.profilePicturePath ? (
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/" +
                                expert.profilePicturePath
                              }
                              alt={`${expert.username.firstName} ${expert.username.lastName}`}
                              width={"100%"}
                              style={{
                                borderRadius: "5px",
                              }}
                            />
                          ) : (
                            <PersonOutlineIcon fontSize="large" />
                          )}
                        </Grid>
                        <Grid item xs={9}>
                          <Typography variant="h6" ml={3} mb={2}>
                            {`${expert.username.firstName} ${expert.username.lastName}`}
                          </Typography>
                          <Typography ml={3}>{expert.bio}</Typography>
                        </Grid>
                      </Grid>
                      <Grid container direction={"row"}>
                        <Grid item xs={10}>
                          <Grid container mt={"10px"} justifyItems={"center"}>
                            {/* <Grid item ml={1}>
                              <Button variant="outlined">Book a visit</Button>
                            </Grid> */}
                            <Grid item ml={1}>
                              <Button
                                variant="outlined"
                                component={Link}
                                to={`${ROUTES.EXPERTS.path}/${expert._id}`}
                              >
                                Profile
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={2}>
                          <Grid
                            container
                            justifyItems={"center"}
                            justifyContent={"end"}
                          >
                            <Grid item m={1}>
                              <IconButton
                                color="error"
                                aria-label="add to favorites"
                              >
                                <FavoriteBorderIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
};

export default ExpertSearchPage;
