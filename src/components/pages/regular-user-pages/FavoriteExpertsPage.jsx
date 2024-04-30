import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import useUsersApi from "../../../hooks/useUsersApi";
import ROUTES from "../../../models/routeModel";
import { useEffect } from "react";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const FavoriteExpertsPage = () => {
  const {
    experts,
    user: userFromServer,
    getUser,
    getExperts,
    likeExpert,
  } = useUsersApi();
  const { user: userFromCntxt } = useUser();
  const navigate = useNavigate();

  if (!userFromCntxt) navigate(ROUTES.LOGIN.path);

  useEffect(() => {
    getExperts();
    getUser(userFromCntxt._id);
  }, []);

  if (userFromServer && experts) {
    const favoriteExperts = experts.filter((ex) => {
      return userFromServer.favExperts.includes(ex._id);
    });

    return (
      <Grid container direction={"column"} mt={1}>
        {favoriteExperts.map((expert) => {
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
                              to={`${ROUTES.EXPERTS_SEARCH.path}/${expert._id}`}
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
                              onClick={() => {
                                likeExpert(expert._id);
                              }}
                            >
                              {userFromServer.favExperts.includes(
                                expert._id
                              ) ? (
                                <FavoriteIcon />
                              ) : (
                                <FavoriteBorderIcon />
                              )}
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
    );
  }
};

export default FavoriteExpertsPage;
