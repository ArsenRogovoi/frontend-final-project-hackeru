import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouteContext } from "../../contexts/RouteContext";
import { Link } from "react-router-dom";
import ROUTES from "../../models/routeModel";

const MobileMenu = () => {
  const { currentPath } = useRouteContext();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isSelected = (path) => currentPath === path;

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ display: { md: "none" } }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { backgroundColor: "#303030", color: "white" } }}
      >
        <Box role="navigation" minWidth={250} onClick={toggleDrawer(false)}>
          <List>
            <ListItem>
              <ListItemButton
                component={Link}
                to={ROUTES.ROOT.path}
                sx={{
                  backgroundColor: isSelected(ROUTES.ROOT.path)
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                <ListItemText primary={ROUTES.ROOT.name} color="" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component={Link}
                to={ROUTES.ABOUT.path}
                sx={{
                  backgroundColor: isSelected(ROUTES.ABOUT.path)
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                <ListItemText primary={ROUTES.ABOUT.name} color="" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component={Link}
                to={ROUTES.EXPERTS.path}
                sx={{
                  backgroundColor: isSelected(ROUTES.EXPERTS.path)
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                <ListItemText primary={ROUTES.EXPERTS.name} color="" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
export default MobileMenu;
