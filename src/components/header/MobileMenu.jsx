import { useState } from "react";
import {
  Grid,
  Box,
  Drawer,
  List,
  ListItem,
  IconButton,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useRouteContext } from "../../contexts/RouteContext";
import ROUTES from "../../models/routeModel";
import Button from "../common/Button";

const MobileMenu = () => {
  const { currentPath } = useRouteContext();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
        PaperProps={{
          sx: {
            backgroundColor: "#303030",
            color: "white",
            justifyContent: "space-between",
          },
        }}
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
        <Box role="navigation" minWidth={250} onClick={toggleDrawer(false)}>
          <Grid container direction={"column"} mb={1}>
            <Grid item p={1} xs={12}>
              <Button
                variant="contained"
                fullWidth
                textColor={"black"}
                handleClick={() => navigate(ROUTES.SIGNUP.path)}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item p={1} xs={12}>
              <Button
                variant="outlined"
                fullWidth
                textColor={"primary"}
                handleClick={() => navigate(ROUTES.LOGIN.path)}
              >
                Log in
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
};
export default MobileMenu;
