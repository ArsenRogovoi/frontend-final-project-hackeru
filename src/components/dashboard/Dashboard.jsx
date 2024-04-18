import { Grid } from "@mui/material";

const Dashboard = ({ children }) => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      {/* children must be DashboardCard.jsx */}
      {children}
    </Grid>
  );
};
export default Dashboard;
