import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const DesktopNavBar = ({ pages }) => {
  const [tabValue, changeTabValue] = useState("Home");

  const handleTabChange = (event, newValue) => {
    changeTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <Tabs
        role="navigation"
        value={tabValue}
        textColor="white"
        indicatorColor="secondary"
        onChange={handleTabChange}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#fff",
          },
        }}
      >
        <Tab value={"Home"} label="Home" />
        <Tab value={"About"} label="About" />
        <Tab value={"Contact"} label="Contact" />
      </Tabs>
    </Box>
  );
};
export default DesktopNavBar;
