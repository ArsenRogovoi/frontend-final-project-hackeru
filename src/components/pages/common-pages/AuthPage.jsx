import { useParams, Link } from "react-router-dom";
import { Grid, Tabs, Tab, Container, Paper, Box, Divider } from "@mui/material";
import ROUTES from "../../../models/routeModel";
import SignupForm from "../../forms/SignupForm";
import LoginForm from "../../forms/LoginForm";
import ExpertSignupForm from "../../forms/ExpertSignupForm";

const AuthPage = () => {
  const { type } = useParams();

  const defineValTabs = (tabsVal) => {
    switch (tabsVal) {
      case "login":
        return "login";
      case "signup":
        return "signup";
      case "expert":
        return "expert";
      default:
        return "login";
    }
  };

  return (
    <Container direction={"column"} border={1} maxWidth={"md"}>
      <Box mt={3}>
        <Paper>
          <Grid container direction={"column"}>
            <Grid item>
              <Tabs value={defineValTabs(type)}>
                <Tab
                  component={Link}
                  to={ROUTES.LOGIN.path}
                  value={"login"}
                  label={"Log in"}
                ></Tab>
                <Tab
                  component={Link}
                  to={ROUTES.SIGNUP.path}
                  value={"signup"}
                  label={"Sign up"}
                ></Tab>
                <Tab
                  component={Link}
                  to={ROUTES.EXPERT_SIGNUP.path}
                  value={"expert"}
                  label={"Expert sign up"}
                ></Tab>
              </Tabs>
            </Grid>
            <Divider />
            <Grid item>
              {type === "signup" && <SignupForm />}
              {type === "login" && <LoginForm />}
              {type === "expert" && <ExpertSignupForm />}
              {type !== "signup" && type !== "login" && type !== "expert" && (
                <LoginForm />
              )}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default AuthPage;
