import {
  Grid,
  Typography,
  Container,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
// wich properties users must have?
import mockExperts from "../../mockData/experts.json";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import ROUTES from "../../models/routeModel";

const ExpertSearchPage = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    // useEffect or react-router?
    setTimeout(() => {
      setExperts(mockExperts);
      console.log(experts);
    }, 1000);
  }, []);

  return (
    <Container>
      <Typography variant="h4" mt={1}>
        Experts for booking visits
      </Typography>
      {/* maybe it will be better with css grid */}
      <Grid container direction={"column"} mt={1}>
        {experts.map((expert) => {
          return (
            <Grid item key={expert.id} my={1}>
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
                      <Grid item xs={3}>
                        {/* meybe mui has some component for images */}
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
                          <Grid item ml={1}>
                            <Button variant="outlined">Book a visit</Button>
                          </Grid>
                          <Grid item ml={1}>
                            <Button
                              variant="outlined"
                              component={Link}
                              to={`${ROUTES.EXPERTS.path}/${expert.id}`}
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
