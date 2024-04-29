import {
  Grid,
  Typography,
  Container,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import useUsersApi from "../../../hooks/useUsersApi";
import SearchExpertsBar from "./components/SearchExpertsBar";
import ExpertsCards from "./components/ExpertsCards";
import { useUser } from "../../../contexts/UserContext";

const ExpertSearchPage = () => {
  const {
    user,
    filteredExperts,
    error,
    loading,
    getExperts,
    getUser,
    filterExpertsByString,
  } = useUsersApi();
  const { user: userFromCntxt } = useUser();
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    getExperts();
    getUser(userFromCntxt._id);
  }, []);

  const handleSearch = () => {
    filterExpertsByString(searchVal);
  };

  if (error)
    return (
      <Grid container justifyContent={"center"} alignItems={"center"} mt={4}>
        <Grid item>
          <Paper sx={{ p: 1, m: 1, backgroundColor: "#FF7373" }}>
            <Typography>{error}</Typography>
          </Paper>
        </Grid>
      </Grid>
    );

  if (loading)
    return (
      <Grid container justifyContent={"center"} alignItems={"center"} mt={4}>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );

  return (
    <Container>
      <Grid container>
        {/* Page heading: */}
        <Grid item xs={12}>
          <Typography variant="h4" mt={1} textAlign={"center"}>
            Experts for booking visits
          </Typography>
        </Grid>
        {/* Search bar: */}
        <Grid item xs={12} mt={1}>
          <SearchExpertsBar
            inputVal={searchVal}
            setInputVal={setSearchVal}
            handleSearch={handleSearch}
          />
        </Grid>
      </Grid>
      {/* experts cards: */}
      {filteredExperts ? (
        <ExpertsCards experts={filteredExperts} user={user} />
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default ExpertSearchPage;
