import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { useState } from "react";

const DesktopNavBar = ({ pages }) => {
  return (
    // <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    //   {pages.map((page) =>
    //     page === "Home" ? (
    //       <Button
    //         key={page}
    //         sx={{
    //           my: 2,
    //           color: "black",
    //           backgroundColor: "lightgray",
    //           ":hover": { backgroundColor: "lightgray" },
    //           display: "block",
    //         }}
    //       >
    //         {page}
    //       </Button>
    //     ) : (
    //       <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
    //         {page}
    //       </Button>
    //     )
    //   )}
    // </Box>
    <Box sx={{ width: "100%" }}>
      <Tabs role="navigation">
        <Tab label="Home" href="#" />
        <Tab label="Page Two" href="#" />
        <Tab label="Page Three" href="#" />
      </Tabs>
    </Box>
  );
};
export default DesktopNavBar;
